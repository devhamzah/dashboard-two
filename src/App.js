import Sidebar from "./pages/global/Sidebar";
import Topbar from "./pages/global/Topbar";

function App() {
  return (
    <div className="App flex h-screen bg-gray-200">
      {/* SIDE BAR */}
      <Sidebar />
      {/* CONTENT CONTAINER */}
      <div className="content flex-grow">
        {/* TOPBAR */}
        <Topbar/>
        {/* CONTENT */}
        
      </div>
    </div>
  );
}

export default App;
