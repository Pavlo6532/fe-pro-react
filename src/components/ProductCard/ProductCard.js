import { FaShoppingCart } from "react-icons/fa";
import ProductPreview from "../../assets/lenovo-laptop-y50.png";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={ProductPreview}
        alt="Product Preview"
        className="product-image"
      />
      <h3 className="product-name">{product.name}</h3>
      <div className="product-info">
        <p className="product-price">{product.price}</p>
        <p className="product-quantity">Quantity: {product.quantity}</p>
      </div>
      <div className="product-status">
        <FaShoppingCart className="cart-icon" />
        {product.status}
      </div>
    </div>
  );
};

export default ProductCard;
