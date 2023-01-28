import { BsSearch,BsPerson,BsList,BsBell } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import Dropdown from "../../components/Dropdown";
import { listItems } from "../../data";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/features/sidebarSlice";
const Topbar = () => {
  const dispatch = useDispatch();
  const [isListOpen, setIsListOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", closList, true);
  }, []);
  const refOne = useRef(null);
  const closList = (e) => {
    if (!refOne.current.contains(e.target)) {
      setIsListOpen(false);
    } else {
      console.log("console out side checked");
    }
  };

  return (
    <>
      {/* SEARCH BAR */}
      <div className={`topbar flex p-4 justify-between items-center `}>
        <div className="flex items-center text-xl">
          <BsList onClick={()=>{dispatch(toggleSidebar(true))}} className="mr-2 cursor-pointer  lg:hidden"/>
          <div className="flex items-center  bg-white p-1 rounded-2xl">
            <div className="px-1 text-gray-700">
              <BsSearch className="ml-1" />
            </div>  
            <input
              type="text"
              placeholder="Search"
              className="ml-5 w-32 focus:outline-none"
            />
          </div>
        </div>
        {/* ICON CONTAINER */}
        <div className="flex text-xl mr-4">
          <div
            ref={refOne}
            onClick={() => {
              setIsListOpen(!isListOpen);
            }}
            className={`${
              isListOpen ? "bg-white" : ""
            } relative transition rounded-full mx-2 cursor-pointer hover:bg-white p-2`}
          >
            <AiOutlineSetting />
            <Dropdown listItems={listItems} isOpen={isListOpen} />
          </div>
          <div className="transition rounded-full mx-2 cursor-pointer hover:bg-white p-2">
            <BsBell />
          </div>
          <div className="transition rounded-full mx-0 cursor-pointer hover:bg-white p-2">
            <BsPerson />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
