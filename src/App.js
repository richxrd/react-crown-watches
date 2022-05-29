import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Auth from "./routes/Auth/Auth";
import Home from "./routes/Home/Home";

const App = () => {
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
