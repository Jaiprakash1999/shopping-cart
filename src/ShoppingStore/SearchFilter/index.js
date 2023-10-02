import { useContext } from "react";
import "./searchBox.css";
import searchIcon from "../Images/search-icon.svg";
import { cartContext } from "../../App";
const SearchFilter = () => {
    const cartState = useContext(cartContext);
    const { filters, setFilters } = cartState || {};
    const { searchText } = filters;

    return (
        <div className="input_field">
            <input
                name="searchText"
                value={searchText}
                onChange={(e) =>
                    setFilters({
                        ...filters,
                        [e.target.name]: e.target.value,
                    })
                }
                className="input"
                type="search"
                placeholder="Search"
            />
            {searchText === "" ? (
                <div className="suffix">
                    <img
                        src={searchIcon}
                        className="image-suffix"
                        alt="search"
                    />
                </div>
            ) : null}
        </div>
    );
};
export default SearchFilter;
