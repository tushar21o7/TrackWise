import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

const WishlistCard = ({
  image,
  isTracking,
  name,
  currentPrice,
  targetPrice,
  navigateUrl,
  handleRemove,
}) => {
  const navigate = useNavigate();

  return (
    <div className="py-10 flex items-start justify-between w-[1180px] mx-auto bg-white border-b-2">
      <div className="flex flex-wrap">
        <img
          src={image}
          alt="Product image"
          className="mx-8 my-auto cursor-pointer"
          onClick={() => navigate(navigateUrl)}
          style={{ maxWidth: "92px", maxHeight: "112px" }}
        />
        <div className="">
          <h5
            className="text-xl font-semibold tracking-tight text-gray-700 cursor-pointer hover:text-gray-500"
            onClick={() => navigate(navigateUrl)}
          >
            {name}
          </h5>
          {isTracking && (
            <span className="px-3 my-auto rounded-2xl bg-yellow-500  text-gray-100">
              Tracking
            </span>
          )}
          <div className="mt-3">
            <div>
              Current price:{" "}
              <span className="text-xl font-semibold">₹{currentPrice}</span>
            </div>
            {isTracking && (
              <div>
                Target price:{" "}
                <span className="text-xl font-semibold">₹{targetPrice}</span>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        className="mr-12 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center"
        onClick={handleRemove}
      >
        <MdDeleteOutline className="size-5  inline" /> Remove
      </button>
    </div>
  );
};

export default WishlistCard;
