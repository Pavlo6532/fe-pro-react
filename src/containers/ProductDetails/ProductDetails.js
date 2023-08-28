import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Chosen product is: {id}</h2>
    </div>
  );
};

export default ProductDetails;
