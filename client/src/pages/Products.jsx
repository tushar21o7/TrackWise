import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Card from "../components/Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    try {
      const token = sessionStorage.getItem("accessToken");
      const { data } = await axios("http://localhost:3000/api/v1/products", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      console.log(error);
    }
  }, [setProducts]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div id="productContainer">
      {products &&
        products.map((product) => (
          <Card
            {...product}
            key={product.id}
            navigateUrl={`/products/${product.id}`}
          />
        ))}
    </div>
  );
};

export default Products;
