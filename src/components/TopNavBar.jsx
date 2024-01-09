import { CiCircleQuestion } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa6";

const TopNavBar = () => {
    return (
        <div className="topNavBar flex items-center justify-between w-[1275px] h-16 px-5 border-b-2">
            <div className="flex gap-4 px-4">
                <h3 className="text-[18px]">Payments</h3>
                <div className="flex items-center text-sm text-slate-600 gap-2">
                    <CiCircleQuestion />
                    How it works
                </div>
            </div>

            <div >
                <input type="text" name="searchBox" id="searchBox" placeholder="Search features, tutorials, etc."/>
            </div>
            <div className="flex items-center gap-2">
                <div className="navTopRightCircle"><RiMessage2Line /></div>
                <div className="navTopRightCircle"><FaCaretDown /></div>
            </div>
        </div>
    )
}

export default TopNavBar