import useForm from "../customHooks/useForm";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import Alert from "../components/Alert";

const Login = () => {
  const navigate = useNavigate();
  const {
    setIsLoggedIn,
    alertPage,
    setAlertPage,
    alertInfo,
    setAlertInfo,
    badPages,
  } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isEmpty, data } = useForm(e.currentTarget);

    if (isEmpty) {
      console.log("Please provide all values");
      return;
    }

    try {
      const resp = await axios.post("/api/v1/auth/login", data);

      const {
        user: { accessToken, refreshToken },
      } = resp.data;

      sessionStorage.setItem("accessToken", accessToken);
      setIsLoggedIn(true);
      navigate(badPages);
    } catch (error) {
      setAlertInfo({ type: 2, msg: error.response.data.msg });
      setAlertPage("Login");
    }
  };

  return (
    <div className="w-full h-screen x flex items-center justify-center">
      <section className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          <img className="w-8 h-8 mr-2" src="/logo.jpeg" alt="logo" />
          TrackWise
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your account
            </h1>
            {alertPage === "Login" && (
              <Alert type={alertInfo.type} msg={alertInfo.msg} />
            )}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="abc@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
