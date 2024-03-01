import { NavLink } from "react-router-dom";
import User from "./User";
import Search from "./Search";
// import logo from "../../public";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-[69px] bg-white">
      <div className="w-[1180px] fixed top-0 left-1/2 -translate-x-1/2 h-[70px] flex justify-between align-middle items-center bg-white">
        <NavLink to="/">
          <div className="flex gap-2">
            <img
              src="/logo.jpeg"
              alt="logo"
              className="size-[35px] rounded-3xl"
            />
            <div className="font-bold text-2xl">TrackWise</div>
          </div>
        </NavLink>

        <Search />
        <User />
      </div>
    </div>
  );
};

export default Navbar;
