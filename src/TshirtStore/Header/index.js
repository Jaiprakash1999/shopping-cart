import SearchFilter from "../SearchFilter";
import "./header.css";
import cartIcon from "../Images/shopping-cart-icon-original.svg";
import filterIcon from "../Images/filter-icon-original.svg";
import { useState } from "react";
import Filter from "../Filter";
const Header = () => {
    const [openFilterModal, setOpenFilterModal] = useState(false);
    return (
        <header className="header">
            <strong>TeeRex Store</strong>
            <SearchFilter />
            <img
                src={filterIcon}
                alt="filterIcon"
                className="filter-icon"
                onClick={() => setOpenFilterModal((prev) => !prev)}
            />
            <div className="cart">
                <img src={cartIcon} height={28} width={28} alt="cart" />
            </div>
            {openFilterModal ? (
                <div className="filter-modal">
                    <Filter />
                </div>
            ) : null}
        </header>
    );
};
export default Header;
