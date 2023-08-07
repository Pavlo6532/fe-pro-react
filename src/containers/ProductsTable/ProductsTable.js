import { FaRegUser, FaRegTrashAlt, FaRegEdit, FaPlus } from "react-icons/fa";
import rozetka_Table from "../../assets/rozetka_table.svg";
import "./ProductsTable.css";

const ProductsTable = ({ products }) => {
  return (
    <div className="products-container">
      <div className="table-header">
        <h1 className="table-title">Products</h1>
        <div className="logo">
          <img src={rozetka_Table} alt="Logo" className="logo-image" />
        </div>
        <div className="buttons">
          <button className="preview-button">
            <FaRegUser className="button-icon" /> Preview
          </button>
          <button className="add-button">
            <FaPlus className="button-icon" /> Add Product
          </button>
        </div>
      </div>
      <table className="products-table">
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
                <FaRegTrashAlt className="icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
