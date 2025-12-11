import React from 'react';
import {Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';
import PaymentFrom from './PaymentFrom';
const paymentPromises = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')
const Payment = () => {
   
    return (
        <Elements stripe={paymentPromises}>
            <PaymentFrom></PaymentFrom>
        </Elements> 
        
    );
};

export default Payment;<h1>This payment for taka</h1>