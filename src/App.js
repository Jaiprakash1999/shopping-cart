import React, { createContext } from "react";
import ShoppingStore from "./ShoppingStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import Header from "./ShoppingStore/Header";
import "./app.css";
import useGetStateData from "./utils/useGetStateData";

export const cartContext = createContext();

const App = () => {
    const {
        cartItem,
        setCartItem,
        filteredProducts,
        searchText,
        setSearchText,
        filters,
        setFilters,
        totalCartItem,
    } = useGetStateData();

    return (
        <cartContext.Provider
            value={{
                cartItem,
                setCartItem,
                filteredProducts,
                searchText,
                setSearchText,
                filters,
                setFilters,
            }}
        >
            <BrowserRouter>
                <div className="header-container">
                    <Header cartLength={totalCartItem} />
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
