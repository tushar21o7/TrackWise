import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const getReadableDate = (numericDate) => {
  const convertedDate = new Date(numericDate);
  const dayOfWeek = convertedDate.toLocaleString("en-us", { weekday: "short" });
  const month = convertedDate.toLocaleString("en-us", { month: "short" });
  const day = convertedDate.getDate();
  const year = convertedDate.getFullYear();
  const formattedDate = `${dayOfWeek} ${day} ${month} ${year}`;
  return formattedDate;
};

const Chart = ({ chartData }) => {
  const data = {
    labels: chartData.map((data) => getReadableDate(data.time)),
    datasets: [
      {
        label: "Price",
        data: chartData.map((data) => data.price),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "red",
        borderWidth: 2,
      },
    ],
  };
  return <Line data={data} />;
};

export default Chart;
