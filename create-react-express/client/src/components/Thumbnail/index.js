import React from "react";
import "./style.css";


function Thumbnail({ src }) {
  return (
    <div
      className="thumbnail"
      role="img"
      aria-label="Restaurant Image"
      style={{
        backgroundImage: `url(${src})`
      }}
    />
  );
}

export default Thumbnail;
