import { useContext } from "react";
import "./searchBox.css";
import searchIcon from "../Images/search-icon.svg";
import { cartContext } from "../../App";
const SearchFilter = () => {
    const cartState = useContext(cartContext);
    const { searchText, setSearchText } = cartState || {};
    return (
        <div className="input_field">
            <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
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
