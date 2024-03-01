import { useEffect } from "react";

const useLogout = () => {
  const TIMEOUT_DURATION = 60 * 60 * 1000;

  const setTokenTimeout = () => {
    clearTimeout(window.tokenTimeout);

    window.tokenTimeout = setTimeout(() => {
      logoutUser();
    }, TIMEOUT_DURATION);
  };

  const logoutUser = () => {
    if (sessionStorage.getItem("accessToken")) {
      window.location.href = "/login";
    }
    sessionStorage.removeItem("accessToken");
  };

  const resetTokenTimeout = () => {
    setTokenTimeout();
  };

  useEffect(() => {
    setTokenTimeout();
    document.addEventListener("mousemove", resetTokenTimeout);
    document.addEventListener("keypress", resetTokenTimeout);

    return () => {
      document.removeEventListener("mousemove", resetTokenTimeout);
      document.removeEventListener("keypress", resetTokenTimeout);
    };
  }, []);

  return null;
};

export default useLogout;
