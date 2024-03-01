import { useEffect } from "react";
import useForm from "../customHooks/useForm";
import axios from "axios";
import { useUserContext } from "../contexts/UserContext";
import Alert from "./Alert";
import { authFetch, updateToken } from "../axios/authFetch";

const Track = ({ product, setProduct, page, isTracking }) => {
  const { alertInfo, setAlertInfo, alertPage, setAlertPage, isLoggedIn } =
    useUserContext();

  function f() {
    document
      .getElementById("openModalBtn")
      .addEventListener("click", function () {
        document.getElementById("myModal").style.display = "block";
      });
  }

  function f2() {
    document
      .getElementById("closeModalBtn")
      .addEventListener("click", function () {
        document.getElementById("myModal").style.display = "none";
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, url, id, currentPrice } = product;
    const {
      data: { email, expectedPrice },
    } = useForm(e.currentTarget);

    const body = {
      name,
      url,
      id,
      email,
      currentPrice,
      expectedPrice,
    };

    try {
      const { data } = await axios.post("/api/v1/track", body);

      if (isLoggedIn) {
        const body2 = { isTracking: true, targetPrice: expectedPrice };
        const token = sessionStorage.getItem("accessToken");
        updateToken(token);
        const resp = await authFetch.patch(`/api/v1/products/${id}`, body2);
        setProduct && setProduct(resp.data.product);
      }

      document.getElementById("myModal").style.display = "none";
      setAlertInfo({ type: 1, msg: data.msg });
      setAlertPage(page);
    } catch (error) {
      setAlertInfo({ type: 2, msg: error.response.data.msg });
      setAlertPage("Track");
      console.log(error);
    }
  };

  useEffect(() => {}, [alertPage]);

  return (
    <>
      {alertPage === "Track" && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 flex justify-center">
          <Alert type={alertInfo.type} msg={alertInfo.msg} />
        </div>
      )}

      {isTracking ? (
        <button
          style={{ borderRadius: "50px" }}
          className="bg-gray-500 text-white text-md p-3 w-full hover:drop-shadow-xl hover:bg-black-500"
        >
          Tracking...
        </button>
      ) : (
        <button
          style={{ borderRadius: "50px" }}
          className="bg-black text-white text-md p-3 w-full hover:drop-shadow-xl hover:bg-black-500"
          id="openModalBtn"
          onClick={f}
        >
          Track
        </button>
      )}

      <div id="myModal" className="modal backdrop-blur-sm">
        <div className="bg-white p-5 max-w-sm rounded-lg absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <span
            className="text-[28px] text-gray-500 px-3 absolute right-1 top-1 font-semibold cursor-pointer hover:bg-gray-300 hover:rounded-3xl"
            id="closeModalBtn"
            onClick={f2}
          >
            &times;
          </span>
          <form onSubmit={handleSubmit}>
            <h1>O</h1>

            <div className="my-3">
              <div className="font-bold">
                Stay updated with product pricing alerts right in your inbox!
              </div>
              <div className="text-[13px] text-gray-500">
                Never miss a bargain again with our timely alerts
              </div>
            </div>

            <div className="mt-6 mb-3">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="border w-full pl-2 py-1 border-gray-300 rounded-md focus:border-1"
                required
              />
            </div>

            <div className="mb-7">
              <label htmlFor="expectedPrice" className="font-medium">
                Target Price
              </label>
              <input
                type="number"
                id="expectedPrice"
                name="expectedPrice"
                className="border w-full pl-2 py-1 border-gray-300 rounded-md focus:border-1"
                required
              />
            </div>

            <button
              className="text-white bg-black rounded-md w-full py-2"
              type="submit"
            >
              Start tracking
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Track;
