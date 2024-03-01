import { useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";

const Alert = ({ type, msg }) => {
  const { setAlertPage } = useUserContext();

  const removeAlert = () => {
    const x = document.getElementById("alert");
    x.classList.add("hidden");
    setAlertPage(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      removeAlert();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  switch (type) {
    case 1:
      return (
        <div
          id="alert"
          className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">{msg}</div>
          <button
            type="button"
            onClick={removeAlert}
            className="text-4xl ms-auto -mx-1.5  bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 pb-1.5 hover:bg-gray-100 inline-flex items-center justify-center w-8 h-8"
          >
            &times;
          </button>
        </div>
      );
    case 2:
      return (
        <div
          id="alert"
          className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
            <span className="sr-only">Error icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">{msg}</div>
          <button
            type="button"
            onClick={removeAlert}
            className="text-4xl ms-auto -mx-1.5  bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 pb-1.5 hover:bg-gray-100 inline-flex items-center justify-center w-8 h-8"
          >
            &times;
          </button>
        </div>
      );
    case 3:
      return (
        <div
          id="alert"
          className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
            </svg>
            <span className="sr-only">Warning icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">{msg}</div>
          <button
            type="button"
            onClick={removeAlert}
            className="text-4xl ms-auto -mx-1.5  bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 pb-1.5 hover:bg-gray-100 inline-flex items-center justify-center w-8 h-8"
          >
            &times;
          </button>
        </div>
      );
  }
};

export default Alert;
