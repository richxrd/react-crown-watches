import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { selectCartTotal } from "../../store/cart/cartSelector";
import { selectCurrentUser } from "../../store/user/userSelector";
import { FormContainer, PaymentFormContainer, StyledButton } from "./styles";
import { Button } from "@mui/material";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);

    const [isProcessing, setIsProcessing] = useState(false);

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        const response = await fetch(
            "/.netlify/functions/create-payment-intent",
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount: amount * 100 }),
            }
        ).then((res) => {
            return res.json();
        });

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : "guest",
                },
            },
        });

        setIsProcessing(false);

        if (paymentResult.error) {
            alert("Payment unsuccessful");
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                alert("payment successful");
            }
        }
    };

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <StyledButton disabled={isProcessing} onClick={paymentHandler}>
                    Pay Now
                </StyledButton>
            </FormContainer>
        </PaymentFormContainer>
    );
};

export default PaymentForm;
