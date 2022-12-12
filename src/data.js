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
    links: ["Bar", "Line", "Pie"],
  },
];


export const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
    revenew: 6400,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
    revenew: 24000,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
    revenew: 355,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
    revenew: 45450,
  },
  {
    id: 5,
    year: 2020,
    userGain: 49400,
    userLost: 234,
    revenew: 23054,
  },
];
