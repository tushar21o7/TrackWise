import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { productName } = useParams();

  useEffect(() => {
    document.getElementById("productName").value = productName || "";
  }, []);

  return (
    <div>
      <input
        id="productName"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          if (text === "") return;
          navigate(`/search/${text}`);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
