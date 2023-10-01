import Filter from "./Filter";
import "./styles.css";
import ProductList from "./ProductList";
const ShoppingStore = () => {
    return (
        <div className="product-list-filter">
            <div className="filter">
                <Filter />
            </div>
            <ProductList />
        </div>
    );
};
export default ShoppingStore;
