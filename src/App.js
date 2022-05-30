import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Auth from "./routes/Auth/Auth";
import Home from "./routes/Home/Home";
import {
    createUserDocumentFromAuth,
    onAuthStateChangedListener,
} from "./utils/firebase";
import { setCurrentUser } from "./store/user/userActions";
import Shop from "./routes/Shop/Shop";
import Checkout from "./routes/Checkout/Checkout";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });

        return unsubscribe;
    }, []);

    return (
        <React.Fragment>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/shop/*" element={<Shop />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </React.Fragment>
    );
};

export default App;
