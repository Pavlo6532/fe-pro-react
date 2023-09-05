import { useState } from "react";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import "./Table.css";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import ProductModal from "../ProductModal/ProductModal";

const Table = ({ products, onDeleteProduct }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleDeleteClick = (productId) => {
    setSelectedProductId(productId);
    setDeleteModalOpen(true);
  };

  const handleEditClick = () => {
    setEditModalOpen(true);
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
              <FaRegEdit
                className="icon"
                onClick={() => handleEditClick(product.id)}
              />
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

      <ProductModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        initialValues={{
          category: "",
          name: "",
          quantity: "",
          price: "",
          description: "",
        }}
        title="Edit product"
      />
    </table>
  );
};

export default Table;
