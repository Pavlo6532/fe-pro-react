import { FaRegUser, FaPlus } from "react-icons/fa";
import "./ProductsButton.css";

const ProductsButton = ({ label, isAddButton, onClick }) => {
  return (
    <button
      className={isAddButton ? "add-button" : "preview-button"}
      onClick={onClick}
    >
      {isAddButton ? (
        <FaPlus className="button-icon" />
      ) : (
        <FaRegUser className="button-icon" />
      )}{" "}
      {label}
    </button>
  );
};

export default ProductsButton;
