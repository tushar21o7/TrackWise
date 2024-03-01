import { useState, useEffect, useCallback } from "react";
import WishlistCard from "../components/WishlistCard";
import { useUserContext } from "../contexts/UserContext";
import Alert from "../components/Alert";
import asset1 from "../assets/asset1.jpeg";
import { authFetch, updateToken } from "../axios/authFetch";

const Products = () => {
  const [products, setProducts] = useState(null);
  const { alertPage, setAlertPage, alertInfo, setAlertInfo } = useUserContext();

  const removeFromCart = async (productId) => {
    try {
      const token = sessionStorage.getItem("accessToken");
      updateToken(token);

      const { data } = await authFetch.delete(`/api/v1/products/${productId}`);

      const newProducts = products.filter(
        (product) => product.id !== productId
      );
      setProducts(newProducts);
      setAlertInfo({ type: 1, msg: data.msg });
      setAlertPage("Products");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = useCallback(async () => {
    try {
      const token = sessionStorage.getItem("accessToken");
      updateToken(token);

      const { data } = await authFetch("/api/v1/products");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }, [setProducts]);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (products && products.length === 0) {
    return (
      <div className="w-[1180px] flex flex-col gap-10 items-center mt-20 p-12">
        <img
          src={asset1}
          alt="Nothing to watch"
          className="size-[250px] border-none"
        />
        <div className="text-2xl font-bold text-gray-500">
          Whoops! You are not watching any product
        </div>
      </div>
    );
  }

  return (
    <>
      {alertPage === "Products" && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex justify-center">
          <Alert type={alertInfo.type} msg={alertInfo.msg} />
        </div>
      )}
      {products && (
        <div className="pt-28 p-12 bg-gray-50">
          {products.map((product) => (
            <WishlistCard
              {...product}
              key={product.id}
              navigateUrl={`/products/${product.id}`}
              handleRemove={() => removeFromCart(product.id)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
