import Header from "./Componet/Header/Header"

import {Route, Switch } from "react-router-dom";
// import Departments from "./container/Departments/Departments";
import About from "./Container/About/About";
import Medicine from "./Container/Medicine/Medicine";
import Doctor from "./Container/Doctor/Doctor";
import Contact from "./Container/Contact/Contact";

import Footer from "./Componet/Footer/Footer"
import Home from "./Container/Home";
import Auth from "./Container/Auth/Auth";
import Appoinment from "./Container/Appoinment/Appoinment";
import Departments from "./Container/Departments/Departments";


function App() {
  return (
    <>
    <Header />
<Switch>
<Route exact path ={"/"}  component={Home}/>
        <Route exact path ={"/About"}  component={About}/>
        <Route exact path ={"/Contact"}  component={Contact}/>
  
        {/* <Route exact path ={"/Departments"}  component={Departments}/>   */}
        <Route exact path ={"/Doctor"}  component={Doctor}/>
        <Route exact path ={"/Medicine"}  component={Medicine}/>
        <Route exact path ={"/Auth"}  component={Auth}/>
        <Route exact path ={"/Appoinment"}  component={Appoinment}/>
        <Route exact path ={"/Departments"}  component={Departments}/>
  

</Switch>
      <Footer />
    </>
  );
}

export default App;

