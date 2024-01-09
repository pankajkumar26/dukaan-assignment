import { NavLink } from "react-router-dom"

import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { RxCaretDown } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";
import { HiSpeakerphone } from "react-icons/hi";
import { BsGrid, BsFillPersonLinesFill } from "react-icons/bs";
import { IoBarChartOutline } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { TfiLocationArrow } from "react-icons/tfi";
import { CiDiscount1, CiWallet } from "react-icons/ci";
import { HiOutlineLightningBolt } from "react-icons/hi";

import reactLogo from "../assets/react.svg";


const routes = [
  {
    path: '',
    name: "Home",
    icon: <GoHome />,
  },
  {
    path: '/orders',
    name: "Orders",
    icon: <LuClipboardList />
  },
  {
    path: '/products',
    name: "Products",
    icon: <BsGrid />
  },
  {
    path: '/delivery',
    name: "Delivery",
    icon: <TbTruckDelivery />
  },
  {
    path: '/marketing',
    name: "Marketing",
    icon: <HiSpeakerphone />
  },
  {
    path: '/analytics',
    name: "Analytics",
    icon: <IoBarChartOutline />
  },
  {
    path: '/payments',
    name: "Payments",
    icon: <MdPayments />
  },
  {
    path: '/tools',
    name: "Tools",
    icon: <TfiLocationArrow />
  },
  {
    path: '/discounts',
    name: "Discounts",
    icon: <CiDiscount1 />
  },
  {
    path: '/audience',
    name: "Audience",
    icon: <BsFillPersonLinesFill />
  },
  {
    path: '/appearance',
    name: "Appearance",
    icon: <LuClipboardList />
  },
  {
    path: '/plugins',
    name: "Plugins",
    icon: <HiOutlineLightningBolt />
  },

]

const SideNavBar = () => {
  return (
    <>
      <div className="flex flex-col justify-between w-[235px] h-full  bg-[rgb(30,38,64)] min-[200px] text-white" >
        <div>
          <div className="flex items-center text-white px-3 py-2 w-full">
            <img src={reactLogo} alt="logo" className="p-2 rounded-md" />
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col justify-center p-1.5">
                <h4 className="">Nishyan</h4>
                <p className="text-[13px] underline text-slate-300">Visit Store</p>
              </div>
              <RxCaretDown className="text-3xl r-2 t-2 " />
            </div>
          </div>
          {routes.map((route) => {
            return (
              <NavLink to={route.path} key={route.name} >
                <div
                  className="flex items-center gap-2 mx-2 px-2 py-1 rounded-md 
                text-gray-300 hover:text-white hover:bg-[rgb(54,60,80)]">
                  <div className="navItemIcon icon m-2 text-lg ">{route.icon}</div>
                  <div className="navItemText text-md ">{route.name}</div>
                </div>
              </NavLink>
            )
          })}
        </div>

        <div className="flex items-center gap-2 m-2 p-2 py-1 h-auto  rounded-md bg-[rgb(54,60,80)] ">
          <CiWallet className="text-3xl" />
          <div>
            <p className="text-[14px] text-gray-400">Available Credits</p>
            <p>222.10</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
