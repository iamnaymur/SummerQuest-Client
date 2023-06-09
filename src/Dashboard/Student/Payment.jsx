import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "../../Components/CheckoutForm";
import { useLoaderData } from "react-router-dom";
const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GATEWAY_PK}`);

const Payment = () => {
  const classData = useLoaderData();
  console.log(classData);

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm classData={classData} />
    </Elements>
  );
};

export default Payment;
