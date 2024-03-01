import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://trackwise-1ejd.onrender.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const updateToken = (token) => {
  authFetch.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export { authFetch, updateToken };
