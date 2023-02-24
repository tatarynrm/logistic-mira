import React, { useState } from "react";
import axios from "../../utils/axios/axios";
const StatusForm = ({ id }) => {
  const [status, setStatus] = useState("");
  console.log(status);
  const handleStatusUpdate = async (e) => {
    e.preventDefault();
    const { data } = await axios.put(`/notes/status/${id}`, {
      status,
    });
    console.log(status);
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={(e) => handleStatusUpdate(e)} style={{ marginTop: "20px" }}>
      <select
        name="status"
        id="status"
        onChange={(e) => setStatus(e.target.value)}
      >
        <option defaultValue={"Оберіть статус"}>Оберіть статус</option>
        <option value="active">У ПРОЦЕСІ</option>
        <option value="done">ЗАВЕРШЕНА</option>
        <option value="undone">НЕ ЗАВЕРШЕНА</option>
      </select>
      {/* <input type="text" onChange={(e) => setStatus(e.target.value)} /> */}
      <button
        className="button button__normal"
        disabled={status === "" && status === "Оберіть статус" ? true : false}
        type="submit"
      >
        Оновити статус
      </button>
    </form>
  );
};

export default StatusForm;
