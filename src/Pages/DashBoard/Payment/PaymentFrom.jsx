import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import "./payment.css";
import { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentFrom = () => {
  const stripe = useStripe();
  const element = useElements();
  const [error , setError] = useState()
  const {parcelID} = useParams()
  console.log(parcelID)
  const {axiosSecure} = useAxiosSecure()

const {isPending , data:parcelInfo = {}  } = useQuery({
    queryKey:["parcel" , parcelID],
    queryFn:async()=>{
        const res = await axiosSecure.get(`/parcel/${parcelID}`)
        return res.data
    }
})
if(isPending){
    return <>Loading...</>
}
console.log(parcelInfo)


  const handleSubmit = async (e) => {
    e.preventDefault();
    // if you dont have stripe and element the you can't payment
    if (!stripe || !element) {
      return;
    }
    //  Get a reference to a mounted CardElement
    const card = element.getElement(CardElement);
    if (card === null || !card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error?.message)
    } else {
      console.log("[paymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
        <div className="">
          <CardElement className="p-2" />
        </div>
        <button  className="w-full paymentBtn text-white py-2 rounded-lg font-semibold transition-all duration-200" type="submit" disabled={!stripe}>
          Pay for parcel pickup
        </button>
        {
            error && <p className="text-red-500">{error}</p>
        }
      </div>
    </form>
  );
};

export default PaymentFrom;
