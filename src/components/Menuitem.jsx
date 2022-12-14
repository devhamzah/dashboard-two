import { BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleMenuItem,toggleSidebar } from "../redux/features/sidebarSlice";
import { NavLink } from "react-router-dom";

const Menuitem = ({ links, icon, title, state }) => {
  const dispatch = useDispatch();
  return (
    <div className="text-gray-400">
      <div
        title={title}
        onClick={(e) => dispatch(toggleMenuItem(e.currentTarget.title))}
        className={`cursor-pointer ${
          state && "text-green-600"
        } hover:text-green-600 my-2 flex justify-between w-50 items-center`}
      >
        <div className="text-2xl">{icon}</div>
        <div className="ml-4 flex-grow">{title}</div>
        <div className="text-2xl ml-4 mt-1">
          <BsChevronDown
            className={`${
              state && "rotate-180"
            } transition-all ease-linear delay-400`}
          />
        </div>
      </div>
      <div
        className={`transition-all ease-linear delay-400 mb-4 ml-10 text-sm max-h-0 overflow-hidden ${
          state ? "max-h-24" : ""
        } `}
      >
        {/* MENU INNER LINKS */}
        {links.map((item, index) => {
          return (
            <NavLink onClick={()=> dispatch(toggleSidebar(false))} to={item.toLowerCase()} key={index}>
              <p className=" my-3">
                {item}
              </p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
export default Menuitem;
