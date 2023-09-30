import Filter from "./Filter";
import useGetData from "./hooks/useGetData";
import "./styles.css";
import ProductList from "./ProductList";
const ShoppingStore = () => {
    const { data } = useGetData();
    return (
        <div className="product-list-filter">
            <div className="filter">
                <Filter />
            </div>
            <ProductList products={data} />
        </div>
    );
};
export default ShoppingStore;
