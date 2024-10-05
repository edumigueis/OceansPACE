import React from "react";

function ConfirmButton({ onConfirm }) {
  return (
    <button className="confirm-button" onClick={onConfirm}>
      CONFIRM
    </button>
  );
}

export default ConfirmButton;
