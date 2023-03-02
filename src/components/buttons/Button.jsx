import React from "react";
import "./Button.scss";
const Button = (props) => {
  const { text, cls, func, w } = props;
  return (
    <button
      style={{ width: `${w}px` }}
      onClick={func}
      className={`button button__${cls}`}
    >
      {text}
    </button>
  );
};

export default Button;
