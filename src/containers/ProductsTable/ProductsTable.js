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
    const fetchProducts = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      } else {
        try {
          const response = await fetch(`${API_BASE_URL}/product`);
          if (response.ok) {
            const data = await response.json();
            setProductsData(data);
          } else {
            console.error("Error fetching data:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchProducts();
  }, [navigate]);

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/product/${productId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setProductsData((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      } else {
        console.error("Error deleting product:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

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
      <Table products={productsData} onDeleteProduct={handleDeleteProduct} />
    </div>
  );
};

export default ProductsTable;
