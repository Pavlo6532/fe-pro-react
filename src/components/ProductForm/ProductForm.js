import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

const validationSchema = Yup.object().shape({
  category: Yup.string().required("This field is required"),
  name: Yup.string().required("This field is required"),
  quantity: Yup.number().required("This field is required"),
  price: Yup.number().required("This field is required"),
});

const ProductForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => onSubmit(values)}
  >
    {(formik) => (
      <Form>
        <div className="form-field">
          <Field
            name="category"
            type="text"
            label="Category"
            as={TextField}
            fullWidth
            required
            error={!!(formik.touched.category && formik.errors.category)}
          />
          <ErrorMessage
            name="category"
            component="div"
            className="error-message"
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
            error={!!(formik.touched.name && formik.errors.name)}
          />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>
        <div className="form-field">
          <Field
            name="quantity"
            type="number"
            label="Quantity"
            as={TextField}
            fullWidth
            required
            error={!!(formik.touched.quantity && formik.errors.quantity)}
          />
          <ErrorMessage
            name="quantity"
            component="div"
            className="error-message"
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
            error={!!(formik.touched.price && formik.errors.price)}
          />
          <ErrorMessage
            name="price"
            component="div"
            className="error-message"
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
    )}
  </Formik>
);

export default ProductForm;
