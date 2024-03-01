import axios from "axios";

const authFetch = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const updateToken = (token) => {
  authFetch.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export { authFetch, updateToken };
