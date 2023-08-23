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
            <td>{product.Category}</td>
            <td>{product.Name}</td>
            <td>{product.Quantity}</td>
            <td>{product.Price}</td>
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
