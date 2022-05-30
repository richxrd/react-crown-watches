import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import {
    selectCartItems,
    selectCartTotal,
} from "../../store/cart/cartSelector";
import { CheckoutBlock, CheckoutHeader, Container, Total } from "./styles";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <Container>
            <CheckoutHeader>
                <CheckoutBlock>
                    <span>Product</span>
                </CheckoutBlock>

                <CheckoutBlock>
                    <span>Name</span>
                </CheckoutBlock>

                <CheckoutBlock>
                    <span>Quantity</span>
                </CheckoutBlock>

                <CheckoutBlock>
                    <span>Price</span>
                </CheckoutBlock>

                <CheckoutBlock>
                    <span>Remove</span>
                </CheckoutBlock>
            </CheckoutHeader>

            {cartItems.map((item) => {
                const { id } = item;
                return <CheckoutItem key={id} cartItem={item} />;
            })}

            <Total>Total: ${cartTotal}</Total>
        </Container>
    );
};

export default Checkout;
