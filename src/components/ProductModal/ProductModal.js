import { Modal, Button, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
import "./ProductModal.css";

const ProductModal = ({ isOpen, onClose, onSubmit, initialValues, title }) => {
  return (
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
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          <Form>
            <div className="form-field">
              <Field
                name="category"
                type="text"
                label="Category"
                as={TextField}
                fullWidth
                required
              />
            </div>
            <div className="form-field">
              <Field
                name="name"
                type="text"
                label="Name"
                as={TextField}
                fullWidth
                required
              />
            </div>
            <div className="form-field">
              <Field
                name="quantity"
                type="number"
                label="Quantity"
                as={TextField}
                fullWidth
                required
              />
            </div>
            <div className="form-field">
              <Field
                name="price"
                type="number"
                label="Price"
                as={TextField}
                fullWidth
                required
              />
            </div>
            <div className="form-field">
              <Field
                name="description"
                type="text"
                label="Description"
                as={TextField}
                fullWidth
              />
            </div>
            <div className="form-field">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                className="submit-button"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Formik>
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
};

export default ProductModal;
