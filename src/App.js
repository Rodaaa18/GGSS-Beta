import './App.css';
import NavbarMenu from './components/Navbar/NavbarMenu';

import { Routes as Switch,  Route,
  // useLocation
} from "react-router-dom";
import Empleados from './components/Home/Empleados';


function App() {
  
  return (
    <>
      <NavbarMenu />
      <Switch>
        <Route path="/ficha-empleados" exact element={<Empleados />} /> 
      </Switch>        
    </>
  

  );
}

export default App;