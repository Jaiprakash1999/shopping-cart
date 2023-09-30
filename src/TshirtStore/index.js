import Filter from "./Filter";
import useGetData from "./hooks/useGetData";
import "./styles.css";
import Header from "./Header";
import ProductList from "./ProductList";
const TshirtStore = () => {
    const { data } = useGetData();
    return (
        <div>
            <div className="header-container">
                <Header />
            </div>
            <div className="product-list-filter">
                <div className="filter">
                    <Filter />
                </div>
                <ProductList products={data} />
            </div>
        </div>
    );
};
export default TshirtStore;
