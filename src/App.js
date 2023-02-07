import './App.css';
import NavbarMenu from './components/Navbar/NavbarMenu';

import { Routes as Switch,  Route,
  // useLocation
} from "react-router-dom";
import Empleados from './components/Home/Empleados';
import Superadmin from './components/Superadmin/Superadmin';


function App() {
  
  return (
    <>
      <NavbarMenu />
      <Switch>
        <Route path="/ficha-empleados" exact element={<Empleados />} /> 
        <Route path="/superadmin" exact element={<Superadmin />} /> 
      </Switch>        
    </>
  

  );
}

export default App;