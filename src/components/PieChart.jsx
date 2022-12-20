import {  Pie } from "react-chartjs-2";
import { UserData } from "../data";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = () => {
  const charData = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
         "#61CDBB",
         'rgb(255, 99, 132)',
         'rgb(54, 162, 235)',
         'rgb(255, 205, 86)',
         "#22C55E"
       ],
      }
    ],
  };

  return (
    <div>
      <div>
        <Pie data={charData} />
      </div>
    </div>
  );
};

export default PieChart;
