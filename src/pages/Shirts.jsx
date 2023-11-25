import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { getAllShirts } from "../api";
import './ShirtsStyles.css'
function Shirts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      getAllShirts().then((res) => {
        setLoading(false);
        setProducts(res.data);
      }).catch((err) => {
        setLoading(false);
        setError(err);
      });
    };
    fetchProducts();
  }, []);
  return (
    <div className="parent_shirts_container">
      <h1 className="listing_heading">Listings</h1>

      {loading && <Loader />}
      {error && <p>{error.message}</p>}

      <div className="shirts_container">
        {products.map((product, key) => (
          <ProductCard key={key} product={product} />
        ))}
      </div>
      
    </div>
  );
}

export default Shirts;
