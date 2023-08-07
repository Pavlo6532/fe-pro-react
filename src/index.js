import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Login from "./containers/Login/Login";
import ProductsTable from "./containers/ProductsTable/ProductsTable";

const productsData = [
  {
    id: 0,
    category: "PC",
    name: "Lenovo Y50-70",
    quantity: 5,
    price: "25,000.00",
  },
  {
    id: 1,
    category: "Clothes",
    name: "Nike M Nk Df Acd21",
    quantity: 22,
    price: "4,000.00",
  },
  {
    id: 2,
    category: "Plumbing",
    name: "CERSANIT Mito 17",
    quantity: 1337,
    price: "5,000.00",
  },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsTable products={productsData} />
    {/* <Login /> */}
  </React.StrictMode>
);
