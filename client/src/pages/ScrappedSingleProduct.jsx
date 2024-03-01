import { useParams, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import Track from "../components/Track";
import { IoEyeOutline } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";
import Alert from "../components/Alert";

const ScrappedSingleProduct = () => {
  const { alertInfo, alertPage } = useUserContext();
  const { productId } = useParams();
  const navigate = useNavigate();

  const products = JSON.parse(localStorage.getItem("products"));
  let product;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      product = products[i];
      break;
    }
  }

  const { image, name, price, url } = product;
  product.currentPrice = parseInt(Number(price.replace(/[^0-9.-]+/g, "")));

  return (
    product && (
      <>
        {alertPage === "ScrappedSingleProduct" && (
          <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 flex justify-center">
            <Alert type={alertInfo.type} msg={alertInfo.msg} />
          </div>
        )}
        <div className="mt-28 mx-12 flex flex-wrap justify-center gap-20">
          <div className="flex flex-col justify-between w-[500px] h-[500px]">
            <div className="border-2 h-full flex justify-center align-middle">
              <img
                src={image}
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
                onClick={() => open(url, "_blank")}
              >
                <AiFillThunderbolt className="size-5 inline" /> Buy now on
                Flipkart
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between w-[450px] h-[500px]">
            <div className="space-y-5">
              <h1 className="font-base text-3xl">{name}</h1>
              <div className="font-semibold text-5xl">{price}</div>
            </div>
            <Track product={product} page={"ScrappedSingleProduct"} />
          </div>
        </div>
      </>
    )
  );
};

export default ScrappedSingleProduct;
