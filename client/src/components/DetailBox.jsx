const DetailBox = ({ type, value, priceChange }) => {
  let extraClass = "";
  if (priceChange) {
    if (value === 0) extraClass = "text-gray-600";
    else if (value > 0) extraClass = "text-red-700";
    else extraClass = "text-green-700";
  }

  return (
    <div className="w-[220px] h-24 bg-gray-200 rounded-md border-gray-300 border-l-4 border-b-4 py-3 pl-3">
      <div className="text-gray-500 text-sm">{type}</div>
      {priceChange ? (
        <div className={`font-semibold text-3xl ${extraClass}`}>{value}%</div>
      ) : (
        <div className="font-semibold text-3xl">₹{value}</div>
      )}
    </div>
  );
};

export default DetailBox;
