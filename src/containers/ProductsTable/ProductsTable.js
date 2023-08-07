import rozetka_Table from "../../assets/rozetka_table.svg";
import "./ProductsTable.css";
import Table from "../../components/Table/Table";
import ProductsButton from "../../components/ProductsButton/ProductsButton";

const ProductsTable = () => {
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

  return (
    <div className="products-container">
      <div className="table-header">
        <h1 className="table-title">Products</h1>
        <div className="logo">
          <img src={rozetka_Table} alt="Logo" className="logo-image" />
        </div>
        <div className="buttons">
          <ProductsButton label="Preview" />
          <ProductsButton label="Add Product" isAddButton />
        </div>
      </div>
      <Table products={productsData} />
    </div>
  );
};

export default ProductsTable;
