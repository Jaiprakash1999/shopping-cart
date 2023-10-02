import SearchFilter from "../SearchFilter";
import "./header.css";
import cartIcon from "../Images/shopping-cart-icon-original.svg";
import filterIcon from "../Images/filter-icon-original.svg";
import { useState } from "react";
import Filter from "../Filter";
import { useNavigate } from "react-router-dom";
const Header = ({ cartLength }) => {
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const [showFilter, setShowFilter] = useState(true);
    const navigate = useNavigate();

    const handleNavigate = () => {
        setShowFilter(false);
        setOpenFilterModal(false);
        navigate("/shoppingCart");
    };

    const handleNavigatToMainPage = () => {
        setShowFilter(true);
        navigate("/");
    };
    return (
        <header className="header">
            <strong onClick={handleNavigatToMainPage} className="heading">
                TeeRex Store
            </strong>
            <SearchFilter />
            {showFilter ? (
                <img
                    src={filterIcon}
                    alt="filterIcon"
                    className="filter-icon"
                    onClick={() => setOpenFilterModal((prev) => !prev)}
                />
            ) : null}
            <div className="cart" onClick={handleNavigate}>
                <img src={cartIcon} height={28} width={28} alt="cart" />
                <span className="total-cart-item"> {cartLength}</span>
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
