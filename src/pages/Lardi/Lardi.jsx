import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/buttons/Button";
import axios from "../../utils/axios/axios";
import { Audio } from "react-loader-spinner";
import "./Lardi.scss";
const Lardi = () => {
  const userData = useSelector((state) => state.auth.data);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [lardi, setLardi] = useState([]);
  const [list, setList] = useState([]);
  const getCargos = async () => {
    try {
      const { data } = await axios.get("/lardi/cargo");
      setLardi(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheckAll(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheckAll([]);
    }
  };
  const check = (item) => {
    const { id, checked } = item.target;
    console.log(checked);
    setList([...list, id]);
    if (!checked) {
      setList(list.filter((item) => item !== id));
    }
  };

  const updateLardiCargos = async () => {
    const dataJson = {
      cargoIds: list,
    };

    try {
      if (list.length === 0) {
        return console.log("nothing");
      }
      const { data } = await axios.post("/lardi/cargo/repeat", list);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [list]);
  console.log(list);
  return (
    <div className="container">
      {userData?.email === "tmv@gmail.com" ? (
        <>
          <button onClick={getCargos}>LARDI</button>
        </>
      ) : null}
      {lardi !== [] ? (
        lardi.map((item) => (
          <div className="lardi__cargo" key={item.id}>
            <div> {item.waypointListSource[0].town.name}</div>
            <div> {item.waypointListTarget[0].town.name}</div>
            <div className="payment">
              {item.payment.price
                ? `${item.payment.price} грн`
                : "Ціну не вказано"}
            </div>
            <div> {item.id}</div>
            <input
              type="checkbox"
              name="data"
              id={item.id}
              onChange={(item) => check(item)}
              // checked={list.includes(item.id)}
            />
          </div>
        ))
      ) : (
        <div style={{ marginTop: "200px" }} className="loader">
          ...............................
        </div>
      )}
      <Button func={updateLardiCargos} text={"Оновити заявки"} cls={"normal"} />
    </div>
  );
};

export default Lardi;
