import React from "react";
import "./styles.css";

export const Button = ({ onOpen }) => {
  return (
    <div>
      <button className="modal-button" onClick={onOpen}>
        Click Me!
      </button>
    </div>
  );
};
