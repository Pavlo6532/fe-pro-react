import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import rozetka_Table from "../../assets/rozetka_table.svg";
import "./ProductsTable.css";
import Table from "../../components/Table/Table";
import ProductsButton from "../../components/ProductsButton/ProductsButton";
import { API_BASE_URL } from "../../constants/constants";
import ProductModal from "../../components/ProductModal/ProductModal";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ProductsTable = () => {
  const navigate = useNavigate();
  const [productsData, setProductsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Add product");

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/product`);
        if (response.ok) {
          const data = await response.json();
          setProductsData(data);
          setIsLoaded(true);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (!isLoaded) {
      fetchProducts();
    }
  }, [navigate, isLoaded]);

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/product/${productId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedProducts = productsData.filter(
          (product) => product.id !== productId
        );
        setProductsData(updatedProducts);
      } else {
        console.error("Error deleting product:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleOpenAddProductModal = () => {
    setModalOpen(true);
    setModalTitle("Add product");
  };

  const handleAddProduct = async (newProduct) => {
    try {
      const response = await fetch(`${API_BASE_URL}/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        setIsLoaded(false);
        setModalOpen(false);
      } else {
        console.error("Error adding product:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding product:", error);
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
          <ProductsButton
            label="Add Product"
            isAddButton
            onClick={handleOpenAddProductModal}
          />
        </div>
      </div>
      {isLoaded ? (
        <Table products={productsData} onDeleteProduct={handleDeleteProduct} />
      ) : (
        <div className="loading-spinner">
          <RingLoader
            css={override}
            size={150}
            color="#123abc"
            loading={!isLoaded}
          />
        </div>
      )}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddProduct}
        initialValues={{
          category: "",
          name: "",
          quantity: "",
          price: "",
          description: "",
        }}
        title={modalTitle}
      />
    </div>
  );
};

export default ProductsTable;
