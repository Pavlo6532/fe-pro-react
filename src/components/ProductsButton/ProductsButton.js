import { FaRegUser, FaPlus } from "react-icons/fa";
import "./ProductsButton.css";

const ProductsButton = ({ label, isAddButton }) => {
  return (
    <button className={isAddButton ? "add-button" : "preview-button"}>
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
