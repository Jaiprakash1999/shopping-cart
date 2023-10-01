import { useContext } from "react";
import "./filter.css";
import { cartContext } from "../../App";
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
            <div>
                <h4>Color</h4>
                <ul type="none">
                    <li>
                        <input
                            type="checkbox"
                            name="color"
                            value="Red"
                            checked={filters.color === "Red"}
                            onChange={handleFilterChange}
                        />
                        Red
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="color"
                            value="Blue"
                            checked={filters.color === "Blue"}
                            onChange={handleFilterChange}
                        />
                        Blue
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="color"
                            value="Green"
                            checked={filters.color === "Green"}
                            onChange={handleFilterChange}
                        />
                        Green
                    </li>
                </ul>
            </div>
            <div>
                <h4>Gender</h4>
                <ul type="none">
                    <li>
                        <input
                            type="checkbox"
                            name="gender"
                            value="Men"
                            checked={filters.gender === "Men"}
                            onChange={handleFilterChange}
                        />
                        Men
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="gender"
                            value="Women"
                            checked={filters.gender === "Women"}
                            onChange={handleFilterChange}
                        />
                        Women
                    </li>
                </ul>
            </div>
            <div>
                <h4>Price</h4>
                <ul type="none">
                    <li>
                        {" "}
                        <input type="checkbox" />0 - Rs250
                    </li>
                    <li>
                        {" "}
                        <input type="checkbox" />
                        Rs251 - Rs450
                    </li>
                </ul>
            </div>
            <div>
                <h4>Type</h4>
                <ul type="none">
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="type"
                            value="Polo"
                            checked={filters.type === "Polo"}
                            onChange={handleFilterChange}
                        />
                        Polo
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="type"
                            value="Hoodie"
                            checked={filters.type === "Hoodie"}
                            onChange={handleFilterChange}
                        />
                        Hoodie
                    </li>
                    <li>
                        {" "}
                        <input
                            type="checkbox"
                            name="type"
                            value="Basic"
                            checked={filters.type === "Basic"}
                            onChange={handleFilterChange}
                        />
                        Basic
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Filter;
