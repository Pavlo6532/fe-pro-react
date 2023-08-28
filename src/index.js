import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Login from "./containers/Login/Login";
import ProductsTable from "./containers/ProductsTable/ProductsTable";
import ProductsPreview from "./containers/ProductsPreview/ProductsPreview";
import ProductDetails from "./containers/ProductDetails/ProductDetails";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {token ? (
          <>
            <Route path="/productstable" element={<ProductsTable />} />
            <Route path="/product-preview" element={<ProductsPreview />} />
            <Route path="/" element={<Navigate to="/productstable" />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/productstable" element={<Navigate to="/login" />} />
            <Route path="/product-preview" element={<Navigate to="/login" />} />
            <Route path="/product/:id" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
