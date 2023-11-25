import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      key={product.id}
      className="product_card"
      onClick={() => navigate(`/shoes/${product.id}`)}
    >
      <img
        src={product.image_url}
        alt={product.name}
        style={{ height: "400px", width: "100%", backgroundSize: "cover" }}
      />
      <div>
        <p className=" uppercase">{product.name}</p>
        <p className="priceText">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
