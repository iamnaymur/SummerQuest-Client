import axios from "axios";
import React, { useEffect, useState } from "react";

const PaymentHistory = () => {
  const [paymentsHistory, setPaymentsHistory] = useState([]);
  console.log(paymentsHistory);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/paymentHistory`)
      .then((res) => setPaymentsHistory(res.data));
  }, []);
  return (
      <div className="overflow-x-auto">
          <h1 className="text-center font-displayThree bold mb-10 text-xl">All your transactions are given below.</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Class Name</th>
            <th>Transaction Id</th>
            <th>Date</th>
          </tr>
        </thead>
        {paymentsHistory.map((singlePayment, index) => (
          <tbody>
            <tr>
              <th>{index + 1}</th>
              <td>{singlePayment.className}</td>
              <td>{singlePayment.transactionId}</td>
              <td>
                {singlePayment.date.split("T")[0]} <br />{" "}
                at: {singlePayment.date.split("T")[1].slice(0,8)}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default PaymentHistory;
