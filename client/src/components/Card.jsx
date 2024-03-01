import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { IoEyeOutline } from "react-icons/io5";
import { authFetch, updateToken } from "../axios/authFetch";

const Card = ({ name, image, price, url, id, navigateUrl }) => {
  const navigate = useNavigate();
  const { setAlertPage, setAlertInfo, isLoggedIn } = useUserContext();

  const initialPrice = parseInt(Number(price.replace(/[^0-9.-]+/g, "")));

  const addToCart = async () => {
    try {
      const body = {
        name,
        id,
        image,
        initialPrice,
        currentPrice: initialPrice,
        lowestPrice: initialPrice,
        highestPrice: initialPrice,
        url,
      };
      const token = sessionStorage.getItem("accessToken");
      updateToken(token);

      const { data } = await authFetch.post("/api/v1/products", body);
      setAlertInfo({ type: 1, msg: data.msg });
      setAlertPage("ScrappedProducts");
    } catch (error) {
      setAlertInfo({ type: 3, msg: error.response.data.msg });
      setAlertPage("ScrappedProducts");
    }
  };

  const handleClick = () => {
    if (!isLoggedIn) return navigate("/login");
    addToCart();
  };

  return (
    <div className="w-full max-w-sm flex flex-col  bg-white border border-gray-200 rounded-lg shadow">
      <img
        src={image}
        alt="product image"
        className="h-[300px] p-8 m-auto cursor-pointer"
        onClick={() => navigate(navigateUrl)}
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
          {name}
        </h5>
        <div className="pt-4 flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <button
            onClick={handleClick}
            className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <IoEyeOutline className="size-6 inline" /> Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
