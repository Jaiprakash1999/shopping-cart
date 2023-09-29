import useGetData from "./hooks/useGetData";
import "./styles.css";
const TshirtStore = () => {
    const { data } = useGetData();
    return (
        <div className="product-card-container">
            {data.map((product) => {
                return (
                    <div className="card">
                        <img
                            src={product.imageURL}
                            alt={product.name}
                            className="product-image"
                        />
                        <strong className="title">{product.name}</strong>
                        <div className="bottom">
                            <strong>Rs {product.price}</strong>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default TshirtStore;
