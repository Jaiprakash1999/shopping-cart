import React from "react";
import ShoppingStore from "./ShoppingStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingCart from "./ShoppingStore/ShoppingCart";
import Header from "./ShoppingStore/Header";
import "./app.css";

const App = () => {
    return (
        <BrowserRouter>
            <div className="header-container">
                <Header />
            </div>
            <Routes>
                <Route path="/" element={<ShoppingStore />} />
                <Route path="/shoppingCart" element={<ShoppingCart />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
