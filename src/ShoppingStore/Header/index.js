import SearchFilter from "../SearchFilter";
import "./header.css";
import cartIcon from "../Images/shopping-cart-icon-original.svg";
import filterIcon from "../Images/filter-icon-original.svg";
import { useState } from "react";
import Filter from "../Filter";
import { useNavigate } from "react-router-dom";
const Header = ({ cartLength }) => {
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/shoppingCart");
    };
    return (
        <header className="header">
            <strong onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                TeeRex Store
            </strong>
            <SearchFilter />
            <img
                src={filterIcon}
                alt="filterIcon"
                className="filter-icon"
                onClick={() => setOpenFilterModal((prev) => !prev)}
            />
            <div className="cart">
                {cartLength}
                <img
                    src={cartIcon}
                    height={28}
                    width={28}
                    alt="cart"
                    onClick={handleNavigate}
                />
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
