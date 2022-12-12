import { Bar } from "react-chartjs-2";
import { UserData } from "../data";
import {Chart as ChartJS} from "chart.js/auto";


const BarChart = () =>{

  const charData = {
    labels: UserData.map((data) => data.year),
    datasets:[{
      label:'User Gained',
      data:UserData.map((data)=> data.userGain),
      backgroundColor:['#34D399']
    },
    {
      label:"User Lost",
      data:UserData.map((data)=>data.userLost),
      backgroundColor:["#EF4444"]
    },
    {
      label:"Revenew",
      data:UserData.map((data)=> data.revenew),
      backgroundColor:["#60A5FA"]
    }
  ]
  }


return <div> 
  <div>
    <Bar data={charData} />
  </div>
</div>
}
export default BarChart;