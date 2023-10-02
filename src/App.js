import React, { createContext, useCallback, useEffect, useState } from "react";
import ShoppingStore from "./ShoppingStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingCart from "./ShoppingStore/ShoppingCart";
import Header from "./ShoppingStore/Header";
import "./app.css";
import useGetData from "./ShoppingStore/hooks/useGetData";

export const cartContext = createContext();

const App = () => {
    const { data: products } = useGetData();
    const [cartItem, setCartItem] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [filters, setFilters] = useState({
        gender: "",
        color: "",
        priceRange: "", // Modify the price range as needed
        type: "",
    });

    const sum = cartItem.reduce((acc, item) => (acc = acc + item.quantity), 0);
    const applyFilters = useCallback(() => {
        let filtered = [...products];
        if (filters.gender) {
            filtered = filtered.filter(
                (product) => product.gender === filters.gender
            );
        }

        // Filter by color
        if (filters.color) {
            filtered = filtered.filter(
                (product) => product.color === filters.color
            );
        }
        //Filter by price range

        if (filters.priceRange) {
            const range = filters.priceRange.trim().split("-");
            const [min, max] = range;
            filtered = filtered.filter(
                (product) =>
                    product.price >= min && product.price <= parseFloat(max)
            );
        }
        if (filters.type) {
            // Filter by type
            filtered = filtered.filter(
                (product) => product.type === filters.type
            );
        }
        if (searchText.trim() !== "") {
            filtered = filtered.filter(
                (product) =>
                    product.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    product.color
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    product.type
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    product.gender
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    }, [filters, products, searchText]);

    useEffect(() => {
        applyFilters();
    }, [applyFilters, filters, products, searchText]);

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
