import { useContext } from "react";
import "./productList.css";
import { cartContext } from "../../App";

const ProductList = ({ products }) => {
    const cartState = useContext(cartContext);
    const { cartItem, setCartItem } = cartState || {};

    const addToCart = (product) => {
        const totalQuantity = product.quantity;
        const existingProduct = cartItem.find((item) => item.id === product.id);

        if (existingProduct) {
            if (existingProduct.quantity < product.quantity) {
                existingProduct.quantity++;
                setCartItem([...cartItem]);
            } else {
                alert("Maximum quantity reached for this item.");
            }
        } else {
            setCartItem([
                ...cartItem,
                { ...product, quantity: 1, totalQuantity },
            ]);
        }
    };

    return (
        <div className="product-card-container">
            {products.map((product) => {
                const { id, name, imageURL, gender, price } = product || {};
                return (
                    <div className="card" key={id}>
                        <img
                            src={imageURL}
                            alt={name}
                            className="product-image"
                        />
                        <strong className="title">
                            {gender} | {name}
                        </strong>
                        <div className="bottom">
                            <strong>Rs {price}</strong>
                            <button
                                onClick={() => addToCart(product)}
                                className="add-to-cart-button"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
