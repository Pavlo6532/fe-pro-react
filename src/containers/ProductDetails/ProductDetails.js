import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { API_BASE_URL } from "../../api/Api";
import rozetka_Table from "../../assets/rozetka_table.svg";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching data:", error));

    document.body.classList.add("product-details-page");

    return () => {
      document.body.classList.remove("product-details-page");
    };
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="wrapp">
      <div className="empty-header"></div>
      <div className="logo">
        <img src={rozetka_Table} alt="Logo" className="logo-image" />
      </div>
      <div className="header-detals">
        <Link to="/product-preview" className="back-link">
          <FaArrowLeft className="back-icon" /> Back to Products
        </Link>
        <h2 className="title-product-detalls">{product?.name}</h2>
      </div>
      <div className="wrapp-info-product">
        <img src={product.image} alt="Product" />
        <div className="wrapp-infos">
          <div className="product-status-detalls">
            <FaCheck className="cart-icon" />
            {product.status}
          </div>
          <p className="product-price-detalls">Price: {product.price} ₴</p>
          <p className="product-quantity-detalls">
            Quantity: {product.quantity}
          </p>
        </div>
      </div>
      <div className="wrapp-description">
        <h2 className="title-product-detalls">Description: {product?.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
