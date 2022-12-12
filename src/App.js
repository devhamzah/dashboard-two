import { Routes,Route } from "react-router-dom";
import LineChart from "./components/LineChart";
import BarChartPage from "./pages/BarChart";
import LineChartPage from "./pages/LineChart";
import ForgotPassword from "./pages/forgotPassword";
import Sidebar from "./pages/global/Sidebar";
import Topbar from "./pages/global/Topbar";
import Login from "./pages/login";
import Register from "./pages/register";


function App() {
  return (
    <div className="App flex h-screen bg-gray-200">
      {/* SIDE BAR */}
      <Sidebar />
      {/* CONTENT CONTAINER */}
      <div className="content flex-grow overflow-hidden scrollbar overflow-y-auto">
        {/* TOPBAR */}
        <Topbar/>
        {/* CONTENT */}
        <div>
          <Routes>
            <Route path="/" element={<div><LineChart/></div>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot Password" element={<ForgotPassword/>} />
            <Route path="/bar" element={<BarChartPage/>} />
            <Route path="/line" element={<LineChartPage/>} />
          </Routes>
        </div>
        
      </div>
    </div>
  );
}

export default App;
