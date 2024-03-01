import { useState, createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const User = ({ children }) => {
  const { pathname } = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("accessToken")
  );
  const [productName, setProductName] = useState("");
  const [products, setProducts] = useState([]);
  const [alertInfo, setAlertInfo] = useState({});
  const [alertPage, setAlertPage] = useState(null);
  const [badPages, setBadPages] = useState(0);

  const updateBadPages = (val) => {
    setBadPages((prev) => prev * val - val);
  };

  useEffect(() => {
    if (pathname.startsWith("/login") || pathname.startsWith("/register"))
      updateBadPages(1);
    else updateBadPages(0);
  }, [pathname]);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        productName,
        setProductName,
        products,
        setProducts,
        alertInfo,
        setAlertInfo,
        alertPage,
        setAlertPage,
        badPages,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default User;
