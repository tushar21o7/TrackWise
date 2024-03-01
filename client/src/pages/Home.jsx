import asset0 from "../assets/asset0.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header className="pt-28">
      <div className="w-[1180px] m-auto flex  gap-1 justify-between align-middle">
        <div className="max-w-2xl">
          <h1 className="mt-28 font-bold text-sky-800 text-5xl">
            Unlock Savings, Unleash TrackWise Magic!
          </h1>
          <p className="my-5 pr-16 text-gray-500">
            A go-to price tracking solution for smarter shopping! Our simple and
            user-friendly app lets you effortlessly track any product on
            Flipkart.
          </p>

          <Link
            to="/register"
            className="bg-cyan-500 hover:bg-cyan-600 rounded-md font-semibold py-3 px-6 shadow-md text-white get-started-btn"
          >
            Get started
          </Link>
        </div>
        <div className="">
          <img src={asset0} alt="hero-section" className="w-[500px]" />
        </div>
      </div>
    </header>
  );
};

export default Home;
