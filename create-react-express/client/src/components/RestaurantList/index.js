import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import UpdateBtn from "../updateBtn";
import { Link } from "react-router-dom";
import "./style.css"

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RestaurantList({ children }) {
  return <div className="list-group">{children}</div>;
}


export function RestaurantListItem({  children }) {
  return (
    <div className="list-group-item"> {children}</div>
  );
}
