import { Line } from "react-chartjs-2";
import { UserData } from "../data";
import {Chart as ChartJS} from "chart.js/auto";

const LineChart = () =>{
  const charData = {
    labels: UserData.map((data) => data.year),
    datasets:[{
      label:'User Gained',
      data:UserData.map((data)=> data.userGain),
      backgroundColor:['#15803d'],
      borderColor:"#86efac"
    },
    {
      label:"User Lost",
      data:UserData.map((data)=>data.userLost),
      backgroundColor:["#dc2626"],
      borderColor:"#fca5a5"
    },
    {
      label:"Revenew",
      data:UserData.map((data)=> data.revenew),
      backgroundColor:["#2563eb"],
      borderColor:"#93c5fd"
    }
  ]
  }



return <div>
   <div>
    <Line data={charData} />
  </div>
</div>
}
export default LineChart;