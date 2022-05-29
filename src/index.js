import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persiststore, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <Provider store={store}>
        <PersistGate persistor={persiststore}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
