import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persiststore, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <Provider store={store}>
        <PersistGate persistor={persiststore}>
            <BrowserRouter>
                <Elements stripe={stripePromise}>
                    <App />
                </Elements>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
