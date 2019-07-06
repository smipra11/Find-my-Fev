import React from "react";
//import { Link } from "react-router-dom";
import "./style.css"



function Navbar() {
    return (
        <nav className = "navbar navbar-expand-lg ">
            <a className="navbar-brand" href="/">
                LifeStyle Restaurant
            </a>
            <a className="navbar-item" href="/">
                About
            </a>
            <a className="navbar-item" href="/">
                hello
                
            </a>
            <a className="navbar-item" href="/Restaurant">
                Restaurant
            </a>


        </nav>
    )
}

export default Navbar;
