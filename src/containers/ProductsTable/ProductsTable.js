import { useState, useEffect, useCallback } from "react";
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
  const [selectedProductForEdit, setSelectedProductForEdit] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
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
        setError("Error fetching data");
      }
    } catch (error) {
      setError("Error fetching data");
    }
  }, [navigate]);

  useEffect(() => {
    if (!isLoaded) {
      fetchProducts();
    }
  }, [isLoaded, fetchProducts]);

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
        setError("Error deleting product");
      }
    } catch (error) {
      setError("Error deleting product");
    }
  };

  const handleOpenAddProductModal = () => {
    setModalOpen(true);
    setModalTitle("Add product");
    setSelectedProductForEdit(null);
    setEditModalOpen(false);
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
        fetchProducts();
      } else {
        setError("Error adding product");
      }
    } catch (error) {
      setError("Error adding product");
    }
  };

  const handleEditProduct = async (editedProduct) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/product/${editedProduct.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedProduct),
        }
      );

      if (response.ok) {
        setIsLoaded(false);
        setEditModalOpen(false);
        fetchProducts();
      } else {
        setError("Error editing product");
      }
    } catch (error) {
      setError("Error editing product");
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
        <Table
          products={productsData}
          onDeleteProduct={handleDeleteProduct}
          onEditProduct={handleEditProduct}
          onEditClick={(product) => {
            setSelectedProductForEdit(product);
            setEditModalOpen(true);
          }}
        />
      ) : error ? (
        <div className="error-message">{error}</div>
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
      <ProductModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSubmit={handleEditProduct}
        initialValues={selectedProductForEdit}
        title="Edit product"
      />
    </div>
  );
};

export default ProductsTable;
