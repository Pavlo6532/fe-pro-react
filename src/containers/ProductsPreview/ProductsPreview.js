import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import rozetka_Table from "../../assets/rozetka_table.svg";
import "./ProductsPreview.css";
import { API_BASE_URL } from "../../api/Api";

const ProductsPreview = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/product`)
      .then((response) => response.json())
      .then((data) => setProductsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="products-preview">
      <div className="logo">
        <img src={rozetka_Table} alt="Logo" className="logo-image" />
      </div>
      <div className="product-cards">
        {productsData.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ProductsPreview;
