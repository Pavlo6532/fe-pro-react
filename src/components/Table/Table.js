import React, { useState } from "react";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import "./Table.css";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";

const Table = ({ products, onDeleteProduct }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDeleteClick = (productId) => {
    setSelectedProductId(productId);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedProductId) {
      onDeleteProduct(selectedProductId);
      setDeleteModalOpen(false);
      setSelectedProductId(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
    setSelectedProductId(null);
  };

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price ₴</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.category}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>
              <FaRegEdit className="icon" />
              <FaRegTrashAlt
                className="icon"
                onClick={() => handleDeleteClick(product.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onCancel={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
      />
    </table>
  );
};

export default Table;
