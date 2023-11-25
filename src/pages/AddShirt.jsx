import Loader from "../components/Loader";
import { useState } from "react";
import { insertShirt } from "../api";
import InputField from "../components/InputField";
import NewsLetter from "../components/NewsLetter";
import "./AddShirtStyle.css";


function AddShirt() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState({});
  const [success, setSuccess] = useState(false);

  const handleValidation = () => {
    if (!product?.name) {
      setError("Please enter a title");
      return false;
    }
    if (!product?.description) {
      setError("Please enter a description");
      return false;
    }
    if (!product?.price) {
      setError("Please enter a price");
      return false;
    }
    if (!product?.image_url) {
      setError("Please enter a image url");
      return false;
    }

    if (
      !product?.image_url.endsWith(".jpg") &&
      !product?.image_url.endsWith(".png") &&
      !product?.image_url.endsWith(".jpeg")
    ) {
      setError("Please enter a valid image url");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!handleValidation()) return;
    setLoading(true);
    insertShirt(product)
      .then((res) => {
        setLoading(false);
        setProduct(res.data);
        setSuccess(true);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  return (
    <div className="_add_shirt_parent">
      <h1 className="listing_heading">Add  T-shirt</h1>
      {loading && <Loader />}
      {error && <p className="errorText">{error.message}</p>}
      {success && <p className="successText"> T-shirt added successfully</p>}

      <form
        className="_add_shirt_form
      "
      >
        <InputField
          placeholder="Title"
          value={product?.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          label="Title"
          type="text"
          editable={true}
        />

        <InputField
          placeholder="Description"
          value={product?.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          label="Description"
          type="text"
          editable={true}
        />
        <InputField
          placeholder="Price"
          value={product?.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          label="Price"
          type="number"
          editable={true}
        />

        <InputField
          placeholder="Image URL"
          value={product?.image_url}
          onChange={(e) =>
            setProduct({ ...product, image_url: e.target.value })
          }
          label="Image URL"
          type="text"
          editable={true}
        />
        <button
          className="_action_button"
          onClick={handleSubmit}
          disabled={loading}
        >
          Add  T-shirt
        </button>
      </form>
      
    </div>
  );
}

export default AddShirt;
