import { Routes, Route } from "react-router-dom";
import BarChartPage from "./pages/BarChart";
import LineChartPage from "./pages/LineChart";
import PiChartPage from "./pages/PiChart";
import ForgotPassword from "./pages/forgotPassword";
import Sidebar from "./pages/global/Sidebar";
import Topbar from "./pages/global/Topbar";
import Login from "./pages/login";
import Register from "./pages/register";
import Contacts from "./pages/contacts";
// testing
import DataTable from "./components/DataTable";
import peoples from "./peopleContacts.json";

const columns = [
  { title: "ID", id: "_id" ,minWidth:240},
  { title: "Name", id: "name",minWidth:170 },
  { title: "Company", id: "company",minWidth:170 },
  { title: "Email", id: "email",minWidth:170 },
  { title: "Phone", id: "phone" ,minWidth:170},
  { title: "Address", id: "address",minWidth:480 },
];

function App() {
  return (
    <div className="App flex h-screen bg-gray-200">
      {/* SIDE BAR */}
      <Sidebar />
      {/* CONTENT CONTAINER */}
      <div className="content flex-grow overflow-hidden scrollbar overflow-y-auto">
        {/* TOPBAR */}
        <Topbar />
        {/* CONTENT */}
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <DataTable rows={peoples} title="Contacts" columns={columns} />
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot Password" element={<ForgotPassword />} />
            <Route path="/bar" element={<BarChartPage />} />
            <Route path="/line" element={<LineChartPage />} />
            <Route path="/pie" element={<PiChartPage />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
