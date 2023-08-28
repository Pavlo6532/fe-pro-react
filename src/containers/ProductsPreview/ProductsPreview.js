import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import rozetka_Table from "../../assets/rozetka_table.svg";
import "./ProductsPreview.css";

const ProductsPreview = () => {
  const productsData = [
    {
      id: 0,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25,000₴",
      quantity: 5,
      status: "Готовий до відправки",
      image: require("../../assets/lenovo-laptop-y50.png").default,
    },
    {
      id: 1,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25,000₴",
      quantity: 5,
      status: "Готовий до відправки",
      image: require("../../assets/lenovo-laptop-y50.png").default,
    },
    {
      id: 2,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25,000₴",
      quantity: 5,
      status: "Готовий до відправки",
      image: require("../../assets/lenovo-laptop-y50.png").default,
    },
    {
      id: 3,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25,000₴",
      quantity: 5,
      status: "Готовий до відправки",
      image: require("../../assets/lenovo-laptop-y50.png").default,
    },
    {
      id: 4,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25,000₴",
      quantity: 5,
      status: "Готовий до відправки",
      image: require("../../assets/lenovo-laptop-y50.png").default,
    },
    {
      id: 5,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25,000₴",
      quantity: 5,
      status: "Готовий до відправки",
      image: require("../../assets/lenovo-laptop-y50.png").default,
    },
  ];

  return (
    <div className="products-preview">
      <div className="logo">
        <img src={rozetka_Table} alt="Logo" className="logo-image" />
      </div>
      <div className="product-cards">
        {productsData.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPreview;
