import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurant from "./pages/restaurant"

import Favorite from "./pages/Favorite"
import Addrestaurant from "./pages/addRestaurant"
//import Footer from "./components/footer"
import "./App.css";
import Update from "./pages/updateRestaurant";




function App() {
  return (
   <Router>
    <div>
      <Switch>
    <Route exact path="/" component={Restaurant} />
          <Route exact path="/restaurant" component={Restaurant} />
          
       <Route exact path ="/restaurant/:id" component={Favorite} />"
       <Route exact path ="/addRestaurant" component={Addrestaurant} />"
       <Route exact path ="/updateRestaurant/:id" component={Update} />"
      </Switch>
      
      
    </div>
    </Router>
   
    



  );
}





export default App;
