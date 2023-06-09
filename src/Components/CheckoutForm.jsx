import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { toast } from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

const CheckoutForm = ({ classData }) => {
  const { user } = useAuth();
  // console.log(classData)
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (classData?.price > 0) {
      axios
        .post(`${import.meta.env.VITE_API_URL}/create-payment-intent`, {
          price: classData?.price,
        })
        .then((response) => {
          // console.log(response.data.clientSecret)
          setClientSecret(response.data.clientSecret);
        })
        .catch((error) => {
          // console.log(error.message);
        });
    }
  }, [classData]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      toast.error(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Unknown",
            email: user?.email || "Anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("[error]", confirmError);
      toast.error(confirmError.message);
    } else {
      console.log("[paymentIntent]", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        //saving payment information to database
        delete classData._id
        const paymentInfo = {
          ...classData,
          // selectedClassId:classData._id,
          email:user?.email,
          transactionId: paymentIntent.id,
          date: new Date(),
        };
        axios
          .post(`${import.meta.env.VITE_API_URL}/bookings`, paymentInfo)
          .then((res) => {
            if (res.data.insertedId) {
              toast.success("Payment successful");
            }
          });
      }
    }
  };

  //* confirm payment method here

  return (
    <form className="w-full  mx-auto" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn primary-button btn-wide"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
