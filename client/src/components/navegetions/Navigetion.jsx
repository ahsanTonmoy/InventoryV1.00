import { MdAddToQueue } from "react-icons/md";
import { TbHttpPost } from "react-icons/tb";
import { IoMdSunny } from "react-icons/io";
import { MdOutlineFullscreen } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
const Navigetion = () => {

    return (
        <div>
            <div className="text-xl flex justify-around gap-3 cursor-pointer">
                {/* add section */}
                <div className="hover:text-[#438a7a]"><MdAddToQueue /></div>
                {/* pos */}
                <div className="hover:text-[#438a7a]"><TbHttpPost/></div>
                {/* theme */}
                <div className="hover:text-[#438a7a]"><IoMdSunny/></div>
                {/* full screen */}
                <div className="hover:text-[#438a7a]"><MdOutlineFullscreen/></div>
                {/* language */}
                <div className="hover:text-[#438a7a]"><MdLanguage/></div>
                {/* User profile */}
                <div className="hover:text-[#438a7a]">
                    <div className="flex gap-2">
                        <div className=""><FaRegUserCircle/></div>
                        <div className="-mt-[3px] uppercase text-base">admin</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigetion;