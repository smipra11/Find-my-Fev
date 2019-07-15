import React from "react";
import Button from "../Buttons"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <Button className="delete-btn" {...props} role="button" tabIndex="0">
      Remove
    </Button>
  );
}

export default DeleteBtn;
