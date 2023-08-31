import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./containers/Login/Login";
import ProductsTable from "./containers/ProductsTable/ProductsTable";
import ProductsPreview from "./containers/ProductsPreview/ProductsPreview";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
import PrivateRoute from "./privateRoute";
import {
  LOGIN_ROUTE,
  PRODUCT_TABLE_ROUTE,
  PRODUCT_PREVIEW_ROUTE,
  PRODUCT_DETAILS_ROUTE,
} from "./constants/constants";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={LOGIN_ROUTE} element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path={PRODUCT_TABLE_ROUTE} element={<ProductsTable />} />
        <Route path={PRODUCT_PREVIEW_ROUTE} element={<ProductsPreview />} />
        <Route path="/" element={<Navigate to={PRODUCT_TABLE_ROUTE} />} />
        <Route path={PRODUCT_DETAILS_ROUTE} element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
