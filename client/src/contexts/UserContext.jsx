import { useState, createContext, useContext, useEffect } from "react";

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const User = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("accessToken")
  );
  const [productName, setProductName] = useState("");
  const [products, setProducts] = useState([]);
  const [alertInfo, setAlertInfo] = useState({});
  const [alertPage, setAlertPage] = useState(null);

  useEffect(() => {
    console.log("hello from global...");
  }, []);

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default User;
