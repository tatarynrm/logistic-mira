import React, { useState, useEffect } from "react";

const Currencies = () => {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    // Your code to fetch currency rates from an API or some external source
    // and then set the rates using setRates function
    // For example, you might use the fetch() function to make an API request
    // to a server that provides the currency rates.
    // The response could be an array of objects with each object representing
    // the currency rate of a bank. The object might look something like this:
    // {
    //   bank: "PrivatBank",
    //   currency: "USD",
    //   buy: 26.5,
    //   sell: 27.1
    // }

    // For this example, I will just set some dummy data as the rates
    setRates([
      { bank: "PrivatBank", currency: "USD", buy: 26.5, sell: 27.1 },
      { bank: "Oschadbank", currency: "USD", buy: 26.7, sell: 27.3 },
      { bank: "Raiffeisen Bank", currency: "USD", buy: 26.6, sell: 27.2 },
    ]);
  }, []);

  return (
    <div>
      <h1>Ukrainian Banks Currency Rates</h1>
      <table>
        <thead>
          <tr>
            <th>Bank</th>
            <th>Currency</th>
            <th>Buy</th>
            <th>Sell</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate, index) => (
            <tr key={index}>
              <td>{rate.bank}</td>
              <td>{rate.currency}</td>
              <td>{rate.buy}</td>
              <td>{rate.sell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Currencies;
