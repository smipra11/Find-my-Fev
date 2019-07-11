import React from "react";
//import { Link } from "react-router-dom";
import "./style.css"



function Navbar() {
    return (
        <nav className = "navbar navbar-expand-lg ">
            <a className="navbar-brand" href="/Restaurant">
                FoodieReview
            </a>
            <a className="navbar-item" href="/Restaurant">
                Home
            </a>
            
            <a className="navbar-item" href="/Favorite">
                Favorite
            </a>


        </nav>
    )
}

export default Navbar;
