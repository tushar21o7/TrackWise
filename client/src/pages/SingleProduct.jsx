import { useEffect, useCallback, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const startTracking = () => {};

  const removeFromCart = async () => {
    try {
      const token = sessionStorage.getItem("accessToken");
      const { data } = await axios.delete(
        `http://localhost:3000/api/v1/products/${productId}`,
        {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      console.log(data.msg);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProduct = useCallback(async () => {
    try {
      const token = sessionStorage.getItem("accessToken");
      const { data } = await axios(
        `http://localhost:3000/api/v1/products/${productId}`,
        {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      setProduct(data.product);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, [setProduct]);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    product && (
      <div style={{ display: "flex", width: "full" }}>
        <div style={{ width: "50%" }}>
          <div style={{ width: "300px", height: "300px" }}>
            <img src={product.image} alt="product image" />
          </div>
          <div>
            <button onClick={removeFromCart}>Remove from Cart</button>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <h3>{product.name}</h3>
          <h4>{product.price}</h4>
          <div>
            <button onClick={startTracking}>Track</button>
          </div>
        </div>
        <div>
          <button onClick={() => {}}>Buy now</button>
        </div>
      </div>
    )
  );
};

export default SingleProduct;
