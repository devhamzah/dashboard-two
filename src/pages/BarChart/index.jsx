import BarChart from "../../components/BarChart";


const BarChartPage = () =>{
return <div className="shadow-[0_2px_8px_0px_rgba(99,99,99,0.3)] mt-5 mb-5   w-11/12 mx-auto bg-white rounded-lg overflow-hidden ">
    <div className="bg-gray-700 py-4 px-4">
      <h1 className="text-3xl text-gray-300 font-bold">Simple Bar Chart</h1>
    </div>
    <div className="p-3 w-11/12 mx-auto" >
      <BarChart/>
    </div>
</div>
} 
export default BarChartPage;