import Filter from "./Filter";
import useGetData from "./hooks/useGetData";
import "./styles.css";
import Header from "./Header";
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
                <div className="product-card-container">
                    {data.map((product) => {
                        return (
                            <div className="card">
                                <img
                                    src={product.imageURL}
                                    alt={product.name}
                                    className="product-image"
                                />
                                <strong className="title">
                                    {product.gender} | {product.name}
                                </strong>
                                <div className="bottom">
                                    <strong>Rs {product.price}</strong>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default TshirtStore;
