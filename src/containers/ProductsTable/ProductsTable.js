import React, { useState, useEffect } from "react";
import rozetka_Table from "../../assets/rozetka_table.svg";
import "./ProductsTable.css";
import Table from "../../components/Table/Table";
import ProductsButton from "../../components/ProductsButton/ProductsButton";

const ProductsTable = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("https://64db4ef3593f57e435b0c317.mockapi.io/product")
      .then((response) => response.json())
      .then((data) => setProductsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="products-container">
      <div className="table-header">
        <h1 className="table-title">Products</h1>
        <div className="logo">
          <img src={rozetka_Table} alt="Logo" className="logo-image" />
        </div>
        <div className="buttons">
          <ProductsButton label="Preview" />
          <ProductsButton label="Add Product" isAddButton />
        </div>
      </div>
      <Table products={productsData} />
    </div>
  );
};

export default ProductsTable;
