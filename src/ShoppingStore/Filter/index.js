import { useContext } from "react";
import "./filter.css";
import { cartContext } from "../../App";
import ColorFilter from "./ColorFilter";
import GenderFilter from "./GenderFilter";
import PriceRangeFilter from "./PriceRangeFilter";
const Filter = () => {
    const filterState = useContext(cartContext);
    const { filters, setFilters } = filterState || {};

    const handleFilterChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFilters({
                ...filters,
                [name]: checked ? value : "",
            });
        } else {
            setFilters({
                ...filters,
                [name]: value,
            });
        }
    };

    return (
        <div className="filter-container">
            <ColorFilter
                filters={filters}
                handleFilterChange={handleFilterChange}
            />
            <GenderFilter
                filters={filters}
                handleFilterChange={handleFilterChange}
            />
            <ColorFilter
                filters={filters}
                handleFilterChange={handleFilterChange}
            />
            <PriceRangeFilter
                filters={filters}
                handleFilterChange={handleFilterChange}
            />
        </div>
    );
};
export default Filter;
