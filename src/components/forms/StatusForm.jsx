import React, { useState } from "react";
import axios from "../../utils/axios/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const StatusForm = ({ id }) => {
  const [status, setStatus] = useState("");
  const notify = (text) => toast.success(text);
  const handleStatusUpdate = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(`/notes/status/${id}`, {
        status,
      });
      notify("Статус оновлено");
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
      <ToastContainer />
    </form>
  );
};

export default StatusForm;
