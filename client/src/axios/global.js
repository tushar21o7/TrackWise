import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.common["Content-Type"] = "application/json";
