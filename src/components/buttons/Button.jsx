import React from "react";
import "./Button.scss";
const Button = (props) => {
  const { text, cls, func } = props;
  return (
    <button onClick={func} className={`button button__${cls}`}>
      {text}
    </button>
  );
};

export default Button;
