import { Modal, Button } from "@mui/material";
import ProductForm from "../ProductForm/ProductForm";
import "./ProductModal.css";

const ProductModal = ({ isOpen, onClose, onSubmit, initialValues, title }) => (
  <Modal
    open={isOpen}
    onClose={onClose}
    aria-labelledby="modal-title"
    className="modal"
  >
    <div className="modal-content">
      <h2 id="modal-title" className="modal-title">
        {title}
      </h2>
      <ProductForm initialValues={initialValues} onSubmit={onSubmit} />
      <div className="form-field">
        <Button
          variant="contained"
          color="secondary"
          onClick={onClose}
          fullWidth
          className="cancel-button"
        >
          Cancel
        </Button>
      </div>
    </div>
  </Modal>
);

export default ProductModal;
