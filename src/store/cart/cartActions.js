import { CART_ACTION_TYPES } from "./cartActionTypes";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== productToRemove.id
        );
    }

    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const setIsCartOpen = (boolean) => {
    return { type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: boolean };
};

export const addItemToCart = (cartItems, product) => {
    const newCartItems = addCartItem(cartItems, product);
    return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const removeItemFromCart = (cartItems, product) => {
    const newCartItems = removeCartItem(cartItems, product);
    return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const clearItemFromCart = (cartItems, product) => {
    const newCartItems = clearCartItem(cartItems, product);
    return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};
