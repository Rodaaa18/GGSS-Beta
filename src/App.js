import './App.css';
import NavbarMenu from './components/Navbar/NavbarMenu';

import { Routes as Switch,  Route, useParams, useLocation,
  // useLocation
} from "react-router-dom";
import Empleados from './components/Home/Empleados';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { divide } from 'lodash';
import { useDispatch } from 'react-redux';
import { saveToken } from './redux/actions/fetchActions';


function App() {
  const [ existe, setExiste ] = useState(false);
  const [ tokenDef, setTokenDef ] = useState("");
 
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get('token');

  console.log(tokenDef);

  async function validationUser(){
    try{
      await axios.get(`http://localhost:19719/token?token=${token}`,  {headers: {
        'Access-Control-Allow-Origin': '*'
    }})
      .then((res)=>{
          if(res.data.statusCode === 200){
            setExiste(true)
            setTokenDef(res.data.result)
          }else{
            return swal({
              title : "Error",
              text : "Token inexistente",
              icon : "error"
            })
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
  useEffect(()=>{
    validationUser();
  },[])
  return (
  <>
    {
      existe ? <><NavbarMenu /><Switch>
        <Route path="/:token" exact element={<ErrorPage />} />
        <Route path="/ficha-empleados" exact element={<Empleados tokenDef={tokenDef} setTokenDef={setTokenDef} />} />
      </Switch></> : <ErrorPage />

    }
    </>
    
    
    
    
  

  );
}

export default App;