import { useNavigate, useLocation } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { IoIosLogOut } from "react-icons/io";

const Logout = () => {
  const { setIsLoggedIn } = useUserContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    setIsLoggedIn(false);
    sessionStorage.clear("accessToken");
    if (pathname.includes("products")) {
      return navigate("/");
    }
    navigate(pathname);
  };

  return (
    <button
      className="text-white bg-slate-500 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center"
      onClick={handleClick}
    >
      <IoIosLogOut className="inline w-5 h-5 mr-1" />
      Logout
    </button>
  );
};

export default Logout;
