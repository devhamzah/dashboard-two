import BarChart from "../../components/BarChart";


const BarChartPage = () =>{
return <div className="shadow-[0_2px_8px_0px_rgba(99,99,99,0.3)]  mt-10 w-10/12 mx-auto bg-white rounded-xl overflow-hidden ">
    <div className="bg-gray-700 py-4 px-4">
      <h1 className="text-3xl text-gray-300 font-bold">Simple Bar Chart</h1>
    </div>
    <div className="p-5">
      <BarChart/>
    </div>
</div>
} 
export default BarChartPage;