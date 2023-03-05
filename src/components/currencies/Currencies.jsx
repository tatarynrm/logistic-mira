import React, { useEffect, useState } from "react";
import "./Currencies.scss";
import axios from "axios";
const Currencies = ({ showCurrencies }) => {
  const [currencies, setCurrencies] = useState([]);
  const endpoints = [
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",
  ];

  useEffect(() => {
    const getCurrencies = async () => {
      const res = await axios
        .get(
          "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
        )
        .then((data) => {
          const filteredData = data?.data.filter(
            (item) =>
              item.txt === "Долар США" ||
              item.txt === "Злотий" ||
              item.txt === "Євро"
          );
          setCurrencies(filteredData);
        });
    };
    getCurrencies();
  }, []);

  return (
    <div className={showCurrencies ? "currencies active" : "currencies"}>
      {currencies?.map((item) => {
        return (
          <div key={item.txt} className={"currency__block"}>
            <div>{item.exchangedate}</div>
            <div className="currency__name">{item.txt}</div>
            <div>{item.rate.toString().slice(0, 4)} грн</div>
          </div>
        );
      })}
    </div>
  );
};

export default Currencies;
