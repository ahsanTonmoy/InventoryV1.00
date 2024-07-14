import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navigetion from "../components/navegetions/Navigetion";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import Ibar from "../components/sidebar/Ibar";
const Main = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <div>
            {/* content */}
            {
                toggle ?
                    <div className="h-screen flex bg-base-100">
                        {/* sidebar */}
                        <div className="w-60 py-2 h-screen fixed border-r">
                            <Sidebar />
                        </div>

                        {/* Main content */}
                        <div className="content ml-60 w-full ">
                            {/* header area */}
                            <div className="p-2 fixed bg-white w-full">
                                <div className="grid grid-cols-2">
                                    {/* btns */}
                                    <div className="">
                                        <button onClick={() => setToggle(!toggle)} className=" p-3 text-xl">
                                            <HiMiniArrowUturnLeft />
                                        </button>
                                    </div>

                                    {/* navigetions */}
                                    <Navigetion />
                                </div>
                            </div>

                            {/* contnent */}
                            <div className="bg-base-200 p-8 h-screen mt-12">
                                content
                            </div>
                        </div>
                    </div>
                    :

                    <div className="h-screen flex bg-base-100">
                        {/* sidebar */}
                        <div className="w-16 py-2 h-screen fixed border-r">
                            <Ibar />
                        </div>
                        {/* Main content */}
                        <div className="content ml-16 w-full ">
                            {/* header area */}
                            <div className="p-2 fixed bg-white w-full">
                                <div className="grid grid-cols-2">
                                    {/* btns */}
                                    <div className="">
                                        <button onClick={() => setToggle(!toggle)} className=" p-3 text-xl">
                                            <HiMiniBars3BottomLeft />
                                        </button>
                                    </div>

                                    {/* navigetions */}
                                    <Navigetion />
                                </div>
                            </div>

                            {/* contnent */}
                            <div className="bg-base-200 p-8 h-screen mt-12">
                                content
                            </div>
                        </div>
                    </div>

            }

        </div >
    );
};

export default Main;

// demo link https://invoika-laravel.themesbrand.website/dashboard