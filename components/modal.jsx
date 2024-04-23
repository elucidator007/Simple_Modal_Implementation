import React from "react";
import "./styles.css";

export const Modal = ({ onClose, isOpen, modalData }) => {
  const modalDesc =
    modalData.length > 0 ? modalData : "This is a random string";
  console.log("inside change", modalDesc, modalData);

  return (
    <div>
      <div
        className="modal-container"
        // style={{ display: isOpen ? "flex" : "none" }}
      >
        <div className="close-button" onClick={onClose}>
          Close
        </div>
        <span className="modal-header">Here is the Title</span>
        <div className="modal-details">{modalDesc}</div>
      </div>
    </div>
  );
};
