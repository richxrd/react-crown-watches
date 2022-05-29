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
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </>
    );
};

export default App;
