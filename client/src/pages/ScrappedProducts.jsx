import { useParams } from "react-router-dom";
import axios from "axios";
import { useCallback, useState, useEffect } from "react";
import Card from "../components/Card";
import Alert from "../components/Alert";
import { useUserContext } from "../contexts/UserContext";

const ScrappedProducts = () => {
  const { productName } = useParams();
  const [products, setProducts] = useState([]);
  const { alertInfo, alertPage } = useUserContext();

  const fetchProducts = useCallback(async () => {
    if (localStorage.getItem("productName") === productName) {
      const newProducts = JSON.parse(localStorage.getItem("products"));
      setProducts(newProducts);
      return;
    }

    try {
      const { data } = await axios.get(`/api/v1/search/${productName}`);
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
    <>
      {alertPage === "ScrappedProducts" && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex justify-center">
          <Alert type={alertInfo.type} msg={alertInfo.msg} />
        </div>
      )}
      <div
        id="productContainer"
        className="pt-28 px-12 bg-gray-50 flex flex-wrap justify-center gap-x-6 gap-y-6"
      >
        {products &&
          products.map((product) => (
            <Card
              {...product}
              key={product.id}
              navigateUrl={`/search/${productName}/${product.id}`}
            />
          ))}
      </div>
    </>
  );
};

export default ScrappedProducts;
