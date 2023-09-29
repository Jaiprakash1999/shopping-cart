import { useState } from "react";
import "./searchBox.css";
import searchIcon from "../Images/search-icon.svg";
const SearchFilter = () => {
    const [searchInput, setSearchInput] = useState("");
    return (
        <div className="input_field">
            <input
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
                className="input"
                type="search"
                placeholder="Search"
            />
            {searchInput === "" ? (
                <div className="suffix">
                    <img src={searchIcon} height={28} width={28} alt="search" />
                </div>
            ) : null}
        </div>
    );
};
export default SearchFilter;
