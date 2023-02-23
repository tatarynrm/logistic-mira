import React from "react";

const StatusRadioButtons = ({ data, setStatus }) => {
  return (
    <>
      <div className="form__group">
        <label>У ПРОЦЕСІ</label>
        <input
          type="radio"
          name="status"
          value="active"
          defaultChecked={data.status === "active"}
        />
      </div>
      <div className="form__group">
        <label>ЗАВЕРШЕНО</label>
        <input
          type="radio"
          name="status"
          value="done"
          defaultChecked={data.status === "done"}
        />
      </div>

      <div className="form__group">
        <label>НЕ ЗАВЕРШЕНО</label>
        <input
          type="radio"
          name="status"
          value="undone"
          defaultChecked={data.status === "undone"}
        />
      </div>
    </>
  );
};

export default StatusRadioButtons;
