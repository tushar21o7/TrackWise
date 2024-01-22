import { NavLink } from "react-router-dom";
import User from "./User";
import Search from "./Search";

const Navbar = () => {
  return (
    <div
      style={{
        width: "full",
        display: "flex",
        gap: "35px",
        justifyContent: "center",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "gray" };
        }}
      >
        Home
      </NavLink>

      <Search />
      <User />
    </div>
  );
};

export default Navbar;
