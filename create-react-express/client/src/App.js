import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurant from "./pages/restaurant"
import Detail from "./pages/details"
import Favorite from "./pages/Favorite"
//import Footer from "./components/footer"
import "./App.css";




function App() {
  return (
   <Router>
    <div>
      <Switch>
    <Route exact path="/" component={Restaurant} />
          <Route exact path="/restaurant" component={Restaurant} />
          
       <Route exact path ="/restaurant/:id" component={Favorite} />"
      </Switch>
      
      
    </div>
    </Router>
   
    



  );
}





export default App;
