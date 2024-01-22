import { useParams } from "react-router-dom";
import axios from "axios";
import { useCallback, useState, useEffect } from "react";
import Card from "../components/Card";
import { useUserContext } from "../contexts/UserContext";

const ScrappedProducts = () => {
  const { productName } = useParams();
  // const { products, setProducts } = useUserContext();
  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    if (localStorage.getItem("productName") === productName) {
      const newProducts = JSON.parse(localStorage.getItem("products"));

      // const newProducts = [];
      // for (let i = 0; i < productsObject.length; i++) {
      //   newProducts.push(productsObject[i]);
      // }

      console.log(
        "products retrieved from localStorage ",
        productName,
        " ",
        typeof newProducts
      );
      setProducts(newProducts);
      return;
    }

    try {
      const { data } = await axios(
        `http://localhost:3000/api/v1/search/${productName}`
      );

      localStorage.setItem("productName", productName);
      localStorage.setItem("products", JSON.stringify(data.products));
      console.log("products fetched using network call");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }, [setProducts, productName]);

  useEffect(() => {
    fetchProducts();
  }, [productName]);

  return (
    <div id="productContainer">
      {products &&
        products.map((product) => (
          <Card
            {...product}
            key={product.id}
            navigateUrl={`/search/${productName}/${product.id}`}
          />
        ))}
    </div>
  );
};

export default ScrappedProducts;
