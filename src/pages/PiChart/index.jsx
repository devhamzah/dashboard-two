import DaughnutChart from "../../components/DaughnutChart";
import PieChart from "../../components/PieChart";


const PiChartPage = () =>{
return <div className="mb-10 shadow-[0_2px_8px_0px_rgba(99,99,99,0.3)]  mt-10  w-10/12 mx-auto bg-white rounded-xl overflow-hidden ">
    <div className="bg-gray-700 py-4 px-4">
      <h1 className="text-2xl md:text-3xl text-gray-300 font-bold">Simple Pie and Daughnut Chart</h1>
    </div>
    <div className="p-5 mx-auto md:flex gap-2">
      <div className="w-full border border-gray-300 rounded my-1">
      <DaughnutChart />
      </div>

      <div className="w-full border border-gray-300 rounded my-1">
      <PieChart/>
      </div>
    </div>
</div>
} 
export default PiChartPage;