import './App.css';
import NavbarMenu from './components/Navbar/NavbarMenu';

import { Routes as Switch,  Route, useParams, useLocation,
  // useLocation
} from "react-router-dom";
import Empleados from './components/Home/Empleados';
import Superadmin from './components/Superadmin/Superadmin';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { saveError, saveStatusCode } from './redux/actions/fetchActions';
import ErrorPage from './components/ErrorPage/ErrorPage';


function App() {
  const [ existe, setExiste ] = useState(false);
  const [ tokenDef, setTokenDef ] = useState("");
  const [ error , setError ] = useState(null);
  const [ statusCode, setStatusCode ] = useState(0);
  const [ perfilesUsuario, sePerfilesUSuario ] = useState({});
 
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get('token');
  const dispatch = useDispatch();
  console.log(tokenDef);

  async function validationUser(){
    try{
      await axios.get(`http://18.205.227.88:8080/token?token=${token}`,  {headers: {
        'Access-Control-Allow-Origin': '*'
    }})
      .then((res)=>{
                
          if(res.data.statusCode === 200){
            setExiste(true)
            setTokenDef(res.data.result)
          }else{
            setError(res.data.message);
            setStatusCode(res.data.statusCode);
          }
      })
    }catch(err){
      swal({
        title : "Error",
        text : "El usuario no tiene permiso o el Token es inválido",
        icon : "error"
      })
    }
  }
  async function validateAdmin(){
    try{
      await axios.post(`http://18.205.227.88/post?token=${token}`)
      .then((res)=>{
        sePerfilesUSuario(res.data)
      })
    }catch(err){
      throw err
    }
  }
  console.log(perfilesUsuario)
  useEffect(()=>{
    validationUser();
    validateAdmin();
  },[])

  return (
    <>
      {tokenDef ? <NavbarMenu perfilesUsuario={perfilesUsuario} setTokenDef={setTokenDef} sePerfilesUSuario={sePerfilesUSuario} /> : <ErrorPage message={error} statusCode={statusCode} /> } 
      <Switch>
        <Route path="/ficha-empleados" exact element={<Empleados sePerfilesUSuario={sePerfilesUSuario} tokenDef={tokenDef}/>} /> 
        <Route path="/superadmin" exact element={<Superadmin />} />
      </Switch>        
    </>
    
    
    
    
  

  );
}

export default App;