import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { productName } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === "") return;
    navigate(`/search/${text}`);
  };

  useEffect(() => {
    document.getElementById("productName").value = productName || "";
  }, []);

  return (
    <form className="flex items-center relative" onSubmit={handleSubmit}>
      <input
        className="flex h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full lg:w-[600px] rounded-lg rounded-r-none focus-visible:ring-transparent pr-8"
        id="productName"
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-cyan-500 text-white hover:bg-cyan-600 h-10 px-4 py-2 rounded-l-none"
        type="submit"
      >
        <CiSearch className="h-7 w-5" />
      </button>
    </form>
  );
};

export default Search;
