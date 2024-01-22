import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import axios from "axios";

const ScrappedSingleProduct = () => {
  const { isLoggedIn } = useUserContext();
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isStored, setIsStored] = useState(false);
  const [isTracking, setIsTracking] = useState(false);

  const products = JSON.parse(localStorage.getItem("products"));
  let product;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      product = products[i];
      break;
    }
  }
  const { image, name, price, url, id } = product;

  const updateDB = async () => {
    try {
      const body = { name, id, image, price, url, isTracking: true };
      const token = sessionStorage.getItem("accessToken");
      console.log("db");
      const {
        data: { msg },
      } = await axios.patch(
        `http://localhost:3000/api/v1/products/${id}`,
        body,
        {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      console.log(msg);
      setIsTracking(true);
    } catch (error) {
      console.log(error);
    }
  };

  const startTracking = async () => {
    try {
      const body = {
        url,
        email: "test2@gmail.com",
        currentPrice: 40,
        expectedPrice: 50,
        id,
      };
      const {
        data: { msg },
      } = await axios.post("http://localhost:3000/api/v1/track", body);
      console.log(msg);
      // if (msg !== `You started tracking ${id}` || !isLoggedIn) return;
      updateDB();
    } catch (error) {
      console.log(error.response);
    }
  };

  const addToCart = async () => {
    try {
      const body = { name, id, image, price, url };
      const token = sessionStorage.getItem("accessToken");
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/products",
        body,
        {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      console.log(data.product);
      setIsStored(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    if (!isLoggedIn) return navigate("/login");
    addToCart();
  };

  const fetchProduct = useCallback(async () => {
    try {
      const token = sessionStorage.getItem("accessToken");
      const { data } = await axios(
        `http://localhost:3000/api/v1/products/${id}`,
        {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      console.log(data);
      data.msg === "Success" ? setIsStored(true) : setIsStored(false);
    } catch (error) {
      console.log(error);
    }
  }, [setIsStored]);

  useEffect(() => {}, [isTracking]);

  useEffect(() => {
    if (!isLoggedIn) return;
    fetchProduct();
  }, [isLoggedIn, setIsStored]);

  return (
    <div style={{ display: "flex", width: "full" }}>
      <div style={{ width: "50%" }}>
        <div style={{ width: "300px", height: "300px" }}>
          <img src={image} alt="product image" />
        </div>
        <div>
          {isStored ? (
            <button>Remove from Cart</button>
          ) : (
            <button onClick={handleClick}>Add to Cart</button>
          )}
        </div>
      </div>
      <div style={{ width: "50%" }}>
        <h3>{name}</h3>
        <h4>{price}</h4>
        <div>
          {isTracking ? (
            <button>Tracking...</button>
          ) : (
            <button onClick={startTracking}>Track</button>
          )}
        </div>
      </div>
      <div>
        <button onClick={() => navigate(url)}>Buy now</button>
      </div>
    </div>
  );
};

export default ScrappedSingleProduct;
