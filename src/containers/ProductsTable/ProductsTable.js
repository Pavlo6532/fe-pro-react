import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import rozetka_Table from "../../assets/rozetka_table.svg";
import "./ProductsTable.css";
import Table from "../../components/Table/Table";
import ProductsButton from "../../components/ProductsButton/ProductsButton";
import { API_BASE_URL } from "../../constants/constants";

const ProductsTable = () => {
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetch(`${API_BASE_URL}/product`)
        .then((response) => response.json())
        .then((data) => setProductsData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [navigate]);

  return (
    <div className="products-container">
      <div className="table-header">
        <h1 className="table-title">Products</h1>
        <div className="logo">
          <img src={rozetka_Table} alt="Logo" className="logo-image" />
        </div>
        <div className="buttons-table">
          <ProductsButton
            label="Preview"
            onClick={() => navigate("/product-preview")}
          />
          <ProductsButton label="Add Product" isAddButton />
        </div>
      </div>
      <Table products={productsData} />
    </div>
  );
};

export default ProductsTable;
