import React from "react";

import "./style.css"

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RestaurantList({ children }) {
  return <div className="wrapper">{children}</div>;
}


export function RestaurantListItem({  children }) {
  return (
    <div className="card"> {children}</div>
  );
}
