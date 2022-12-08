import { BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import Dropdown from "../../components/Dropdown";
import { menuItems } from "../../data";
import { useEffect, useRef, useState } from "react";
const Topbar = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", closList, true);
  }, []);
  const refOne = useRef(null);
  const closList = (e) => {
    if (!refOne.current.contains(e.target)) {
      setIsListOpen(false);
    } else {
      console.log("click inside");
    }
  };

  return (
    <>
      {/* SEARCH BAR */}
      <div className={`topbar flex p-4 justify-between items-center`}>
        <div className="flex items-center text-xl bg-white p-1 rounded-2xl">
          <div className="px-1 text-gray-700">
            <BsSearch className="ml-1" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="ml-5 w-32 focus:outline-none"
          />
        </div>
        {/* ICON CONTAINER */}
        <div className="flex text-xl">
          <div
            ref={refOne}
            onClick={() => setIsListOpen(!isListOpen)} 
            className={`${isListOpen ? "bg-white" : ""} relative transition rounded-full mx-2 cursor-pointer hover:bg-white p-2`}
          >
            <AiOutlineSetting/>
            <Dropdown menuItems={menuItems} isOpen={isListOpen} />
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
