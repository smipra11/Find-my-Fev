import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import UpdateBtn from "../updateBtn";
import { Link } from "react-router-dom";
import "./style.css"

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RestaurantList({ children }) {
  return <ul className="list-group">{children}</ul>;
}


export function RestaurantListItem({  children }) {
  return (
    <li className="list-group-item"> {children}</li>
  );
}
