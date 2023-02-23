import React from "react";

const StatusRadioButtons = ({ data, setStatus, status }) => {
  console.log(data.status);
  console.log(status);
  return (
    <>
      <div className="form__group">
        <label>У ПРОЦЕСІ</label>
        <input
          type="radio"
          name="status"
          value="active"
          //   defaultChecked={data.status === "active"}
          //   onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <div className="form__group">
        <label>ЗАВЕРШЕНО</label>
        <input
          type="radio"
          name="status"
          value="done"
          //   defaultChecked={data.status === "done"}
          //   onChange={(e) => setStatus(e.target.value)}
        />
      </div>

      <div className="form__group">
        <label>НЕ ЗАВЕРШЕНО</label>
        <input
          type="radio"
          name="status"
          value="undone"
          //   defaultChecked={data.status === "undone"}
          //   onChange={(e) => setStatus(e.target.value)}
        />
      </div>
    </>
  );
};

export default StatusRadioButtons;
