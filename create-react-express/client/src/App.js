import React from "react";

import Navbar from "./components/Navbar"
import Restaurant from "./pages/restaurant"
import "./App.css";

import Searchbar from "./components/searchbar";


function App() {
  return (
   
    <div>
      <Navbar />
      <Searchbar />
      <Restaurant />
    </div>
   
    



  );
}





export default App;
