import { useUserContext } from "../contexts/UserContext";
import Logout from "./Logout";
import { NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

const User = () => {
  const { isLoggedIn } = useUserContext();

  return (
    <div className="flex gap-5 w-fit items-center">
      {isLoggedIn ? (
        <>
          <NavLink
            to="products"
            style={({ isActive }) => {
              if (isActive) {
                return {
                  padding: "5px",
                  background: "#d3d3d3",
                  borderRadius: "25px",
                };
              }
            }}
          >
            <IoEyeOutline className="size-8" />
          </NavLink>
          <Logout />
        </>
      ) : (
        <NavLink to="/login">
          <button className="text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center">
            <FiLogIn className="inline w-5 h-5 mr-1" /> Login
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default User;
