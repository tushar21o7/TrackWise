import { Navigate, useNavigate } from "react-router-dom";

const Card = ({ name, image, price, url, id, navigateUrl }) => {
  const navigate = useNavigate();

  return (
    <div key={id} onClick={() => navigate(navigateUrl)}>
      <img
        src={image}
        alt="product image"
        style={{ height: "100px", width: "100px" }}
      />
      <h4>{name}</h4>
      <h5>{price}</h5>
    </div>
  );
};

export default Card;
