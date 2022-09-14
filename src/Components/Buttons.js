import React from "react";

const Buttons = ({ setState, style }) => {
  return (
    <button
      className='dresscodeButtons'
      onClick={() => {
        setState({ style: style });
      }}
    >
      {style.toUpperCase()}
    </button>
  );
};

export default Buttons;
