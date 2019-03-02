import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div>
      <input {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props}>
        Search
    </button>
  );
}