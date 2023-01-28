import DaughnutChart from "../../components/DaughnutChart";
import PieChart from "../../components/PieChart";


const PiChartPage = () =>{
return <div className=" shadow-[0_2px_8px_0px_rgba(99,99,99,0.3)]  mt-5 mb-5  w-11/12 mx-auto bg-white rounded-lg overflow-hidden ">
    <div className="bg-gray-700 py-4 px-4">
      <h1 className="text-2xl md:text-3xl text-gray-300 font-bold">Simple Pie and Daughnut Chart</h1>
    </div>
    <div className="p-5 mx-auto md:flex gap-2 w-11/12">
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