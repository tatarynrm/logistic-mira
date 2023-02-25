import React from "react";
import "./Tooltip.scss";
const Tooltip = ({ tooltip, cls }) => {
  return (
    <div className={`note ${cls} ? "show" : "hide"}`}>
      <div className="note__content">{tooltip}</div>
    </div>
  );
};

export default Tooltip;
