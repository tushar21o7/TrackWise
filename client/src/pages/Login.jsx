import useForm from "../customHooks/useForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isEmpty, data } = useForm(e.currentTarget);

    if (isEmpty) {
      console.log("Please provide all values");
      return;
    }

    try {
      const resp = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        data
      );

      const {
        user: { accessToken, refreshToken },
      } = resp.data;

      sessionStorage.setItem("accessToken", accessToken);
      setIsLoggedIn(true);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
