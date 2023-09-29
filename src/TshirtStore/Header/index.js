import SearchFilter from "../SearchFilter";
import "./header.css";
import cartIcon from "../Images/shopping-cart-icon-original.svg";
const Header = () => {
    return (
        <header className="header">
            <strong>TeeRex Store</strong>
            <SearchFilter />
            <div className="cart">
                <strong className="product-text">Products</strong>
                <img src={cartIcon} height={28} width={28} alt="cart" />
            </div>
        </header>
    );
};
export default Header;
