import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import "./Table.css";

const Table = ({ products }) => {
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
              <FaRegTrashAlt className="icon" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
