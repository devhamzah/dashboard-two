import { BsHouseDoor } from "react-icons/bs";
import {RiPagesLine} from "react-icons/ri";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import {FiDatabase} from "react-icons/fi";
import {IoStatsChartSharp} from "react-icons/io5";

export const listItems = ["Profile", "Setting", "Logout"];

export const menuItems = [
  {
    title: "Dashboard",
    icon: <BsHouseDoor />,
    state: false,
    links: ["Classic", "Minimal"],
  },
  {
    title: "Pages",
    icon: <RiPagesLine />,
    state: false,
    links: ["Login", "Register", "Forgot Password"],
  },
  {
    title: "Data",
    icon: <FiDatabase />,
    state: false,
    links: ["Team", "Contacts", "Recent Trsections"],
  },
  {
    title: "Applications",
    icon: <AiOutlineAppstoreAdd/>,
    state: false,
    links: ["Mail Box", "Chat", "FAQ"],
  },
  {
    title: "Charts",
    icon: <IoStatsChartSharp/>,
    state: false,
    links: ["Line ", "Pie", "Graph"],
  },
];
