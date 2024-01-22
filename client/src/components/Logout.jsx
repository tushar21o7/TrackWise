import { useNavigate, useLocation } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    sessionStorage.clear("accessToken");
    if (pathname.includes("products")) {
      return navigate("/");
    }
    navigate(pathname);
  };

  return <button onClick={handleClick}>Logout</button>;
};

export default Logout;
