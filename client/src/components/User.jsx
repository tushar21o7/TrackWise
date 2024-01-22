import { useUserContext } from "../contexts/UserContext";
import Logout from "./Logout";
import { NavLink } from "react-router-dom";

const User = () => {
  const { isLoggedIn, setIsLoggedIn } = useUserContext();

  return (
    <div>
      {isLoggedIn ? (
        <div style={{ display: "flex", justifyContent: "end", gap: "10px" }}>
          <NavLink to="products">Cart</NavLink>
          <span onClick={() => setIsLoggedIn(false)}>
            <Logout />
          </span>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{ color: "white" }}>
            <NavLink to="/register">Register</NavLink>
          </button>
          <button style={{ color: "white" }}>
            <NavLink to="/login">Login</NavLink>
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
