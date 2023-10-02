import { useCallback, useEffect, useState } from "react";
import useGetData from "../ShoppingStore/hooks/useGetData";

const useGetStateData = () => {
    const { data: products } = useGetData();
    const [cartItem, setCartItem] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [filters, setFilters] = useState({
        gender: "",
        color: "",
        priceRange: "",
        type: "",
    });

    const totalCartItem = cartItem.reduce(
        (acc, item) => (acc = acc + item.quantity),
        0
    );
    const applyFilters = useCallback(() => {
        let filtered = [...products];

        if (filters.gender) {
            filtered = filtered.filter(
                (product) => product.gender === filters.gender
            );
        }

        if (filters.color) {
            filtered = filtered.filter(
                (product) => product.color === filters.color
            );
        }

        if (filters.priceRange) {
            const range = filters.priceRange.trim().split("-");
            const [min, max] = range;
            filtered = filtered.filter(
                (product) =>
                    product.price >= min && product.price <= parseFloat(max)
            );
        }

        if (filters.type) {
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

    return {
        cartItem,
        setCartItem,
        filteredProducts,
        searchText,
        setSearchText,
        filters,
        setFilters,
        totalCartItem,
    };
};

export default useGetStateData;
