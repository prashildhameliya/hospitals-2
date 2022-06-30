import Header from "./Componet/Header/Header"

import {Route, Switch } from "react-router-dom";
// import Departments from "./container/Departments/Departments";
import About from "./Container/About/About";
import Medicine from "./Container/Medicine/Medicine";
import Doctor from "./Container/Doctor/Doctor";
import Contact from "./Container/Contact/Contact";
import ContactList from "./Container/Contact/ContactList";
import Footer from "./Componet/Footer/Footer"
import Home from "./Container/Home";
import Auth from "./Container/Auth/Auth";
import Appoinment from "./Container/Appoinment/Appoinment";
import Departments from "./Container/Departments/Departments";
import {Provider} from "react-redux";
import { configureStore } from "./redux/Store";
import Counter from "./Container/counter/Counter";


function App() {
  const store=configureStore()
  return (
    <>
    <Provider store={store}>
    <Header />
<Switch>
<Route exact path ={"/"}  component={Home}/>
        <Route exact path ={"/About"}  component={About}/>
        <Route exact path ={"/Contact"}  component={Contact}/>
        <Route exact path ={"/Counter"}  component={Counter}/>
        <Route exact path ={"/ContactList"}  component={ContactList}/>
        {/* <Route exact path ={"/Departments"}  component={Departments}/>   */}
        <Route exact path ={"/Doctor"}  component={Doctor}/>
        <Route exact path ={"/Medicine"}  component={Medicine}/>
        <Route exact path ={"/Auth"}  component={Auth}/>
        <Route exact path ={"/Appoinment"}  component={Appoinment}/>
        <Route exact path ={"/Departments"}  component={Departments}/>
  

</Switch>
      <Footer />
      </Provider>
    </>
  );
}

export default App;

