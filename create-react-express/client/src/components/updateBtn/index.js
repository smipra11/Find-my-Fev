import React from "react";
import Button from "../Buttons"
import "./style.css"


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function UpdateBtn(props) {
  return (
    <Button className="update-btn" {...props} role="button" tabIndex="0">
      Update
    </Button>
  );
}

export default UpdateBtn
