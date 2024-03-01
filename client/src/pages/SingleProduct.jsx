import { useEffect, useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Track from "../components/Track";
import { useUserContext } from "../contexts/UserContext";
import DetailBox from "../components/DetailBox";
import Chart from "../components/Chart";
import Alert from "../components/Alert";
import { IoEyeOutline } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";
import { authFetch, updateToken } from "../axios/authFetch";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { alertInfo, alertPage } = useUserContext();

  const fetchProduct = useCallback(async () => {
    try {
      const token = sessionStorage.getItem("accessToken");
      updateToken(token);
      const { data } = await authFetch(`/api/v1/products/${productId}`);
      setProduct(data.product);
    } catch (error) {
      console.log(error);
    }
  }, [setProduct]);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    product && (
      <>
        {alertPage === "SingleProduct" && (
          <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 flex justify-center">
            <Alert type={alertInfo.type} msg={alertInfo.msg} />
          </div>
        )}
        <div className="mt-28 mx-12">
          <div className="flex flex-wrap justify-center gap-20">
            <div className="flex flex-col justify-between w-[500px] h-[500px]">
              <div className="border-2 h-full flex justify-center align-middle">
                <img
                  src={product.image}
                  alt="product image"
                  className="m-auto"
                  style={{ maxHeight: "400px" }}
                />
              </div>
              <div className="mt-2 flex gap-x-2 justify-between">
                <button
                  className="w-1/2 text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3.5 text-center"
                  onClick={() => navigate("/products")}
                >
                  <IoEyeOutline className="size-5 inline" /> Go to watchlist
                </button>
                <button
                  className="w-1/2 text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3.5 text-center"
                  onClick={() => open(product.url, "_blank")}
                >
                  <AiFillThunderbolt className="size-5 inline" /> Buy now on
                  Flipkart
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between w-[450px] h-[500px]">
              <div className="space-y-5">
                <h1 className="font-base text-3xl">{product.name}</h1>
                {!product.isTracking && (
                  <div className="font-semibold text-5xl">{product.price}</div>
                )}
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap gap-1">
                  {product.isTracking && (
                    <>
                      <DetailBox
                        type={"Target Price"}
                        value={product.targetPrice}
                      />
                      <DetailBox
                        type={"Price change"}
                        value={
                          ((product.currentPrice - product.initialPrice) *
                            100) /
                          product.initialPrice
                        }
                        priceChange={true}
                      />
                    </>
                  )}
                  <DetailBox
                    type={"Current Price"}
                    value={product.currentPrice}
                  />
                  <DetailBox
                    type={"Lowest Price"}
                    value={product.lowestPrice}
                  />
                  <DetailBox
                    type={"Highest Price"}
                    value={product.highestPrice}
                  />
                  <DetailBox
                    type={"Average Price"}
                    value={(product.lowestPrice + product.highestPrice) / 2}
                  />
                </div>
                <Track
                  product={product}
                  setProduct={setProduct}
                  page={"SingleProduct"}
                  isTracking={product.isTracking}
                />
              </div>
            </div>
          </div>
          <div className="my-16 mx-auto size-5/6">
            <h2 className="font-bold text-xl">Last 7 day price history</h2>
            <Chart chartData={product.priceArray} />
          </div>
        </div>
      </>
    )
  );
};

export default SingleProduct;
