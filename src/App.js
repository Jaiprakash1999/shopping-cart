import React, { createContext, useState } from "react";
import ShoppingStore from "./ShoppingStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingCart from "./ShoppingStore/ShoppingCart";
import Header from "./ShoppingStore/Header";
import "./app.css";

export const cartContext = createContext();

const App = () => {
    const [cartItem, setCartItem] = useState([]);

    const sum = cartItem.reduce((acc, item) => (acc = acc + item.quantity), 0);
    return (
        <cartContext.Provider value={{ cartItem, setCartItem }}>
            <BrowserRouter>
                <div className="header-container">
                    <Header cartLength={sum} />
                    <Routes>
                        <Route path="/" element={<ShoppingStore />} />
                        <Route
                            path="/shoppingCart"
                            element={<ShoppingCart />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </cartContext.Provider>
    );
};

export default App;
