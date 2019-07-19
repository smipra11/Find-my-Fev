import React from "react";
//import { Link } from "react-router-dom";
import "./style.css"



function Navbar() {
    return (
        <nav className = "navbar navbar-expand-lg ">
            <a className="navbar-brand" href="/">
                FoodieReview
            </a>
            <a className="navbar-item" href="/Restaurant">
                Home
            </a>
            
            
            <a className="navbar-item" href="/addRestaurant">
                Add Restaurant
            </a>


        </nav>
    )
}

export default Navbar;
