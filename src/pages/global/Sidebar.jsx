import { useSelector } from "react-redux";
import Menuitem from "../../components/Menuitem";



const Sidebar = () => {
  const {menuItems} = useSelector((store)=>store.sidebar);
  console.log(menuItems);
  return (
    <div
      className={`transition fixed w-64 h-screen -translate-x-64 lg:transform-none lg:relative bg-gray-800`}
    >
      {/* USER PROFILE */}
      <div className={`w-48 mx-auto my-10`}>
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
            return <Menuitem state={item.state} title={item.title} links={item.links} icon={item.icon} key={index} />
        })}
      </div>
    </div>
  );
};
export default Sidebar;
