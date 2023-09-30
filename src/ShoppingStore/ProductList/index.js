import "./productList.css";

const ProductList = ({ products }) => {
    return (
        <div className="product-card-container">
            {products.map((product) => {
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
    );
};

export default ProductList;
