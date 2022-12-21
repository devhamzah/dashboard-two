import { useDispatch, useSelector } from "react-redux";
import Menuitem from "../../components/Menuitem";
import {AiOutlineCloseCircle} from "react-icons/ai";
import { toggleSidebar } from "../../redux/features/sidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const {menuItems,isSidebarOpen} = useSelector((store)=>store.sidebar);
  return (
    <div
      className={`z-50 transition delay-400 ease-in-out scrollbar overflow-hidden overflow-y-auto fixed w-72 h-screen ${isSidebarOpen ? "" :"-translate-x-72"} lg:transform-none lg:relative bg-gray-800`}
    >
      {/* CLOSE MENU FOR SMALL DEVICES */}
      <div className="text-3xl text-white w-60 lg:hidden ">
        <AiOutlineCloseCircle onClick={()=>dispatch(toggleSidebar(false))} className="cursor-pointer ml-auto mt-2"/>
      </div>
      {/* USER PROFILE */}
      <div className={`w-48 mx-auto lg:mt-10 mb-10`}>
        <div className="flex flex-col items-center">
          <img className="rounded-full w-28 h-28" src="./userImage.png" alt="" />
          <h1 className="text-gray-300 text-xl">Hamza Ali</h1>
          <div className="bg-gray-700 rounded-2xl my-2 text-gray-300">
            <h1 className="pb-1 px-4">mydevmate@gmail.com</h1>
          </div>
        </div>
      </div>
      {/* MENU ITEMS */}
      <div className={`w-48 mx-auto`}>
        {menuItems.map((item,index)=>{
            return <Menuitem  state={item.state} title={item.title} links={item.links} icon={item.icon} key={index} />
        })}
      </div>
    </div>
  );
};
export default Sidebar;
