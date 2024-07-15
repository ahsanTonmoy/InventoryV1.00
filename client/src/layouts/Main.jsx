import { useState } from "react";
import Sidebar from './../components/sidebar/Sidebar';
import Ibar from './../components/sidebar/Ibar';
import { HiBars3BottomLeft } from "react-icons/hi2";
import { TbArrowBigLeftLines } from "react-icons/tb";
import { Outlet } from "react-router-dom";
import Navigetion from "../components/navegetions/Navigetion";
const Main = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <div>
            {/* main layout */}
            <div className="main-layout">
                {
                    toggle ?
                        <div className="">
                            {/* sidebar */}
                            <div className="">
                                <div className="">
                                    <div className={"bg-base-100 h-screen md:w-60 fixed top-0 border-r"}>
                                        <Sidebar />
                                    </div>
                                </div>

                            </div>

                            {/* content */}
                            <div className={"bg-base-200 bg-opacity-80 ml-60 min-h-screen relative"}>
                                {/* navigetion */}
                                <div className="bg-white grid grid-cols-2 p-4">
                                    <div className="">
                                         <div onClick={() => setToggle(!toggle)} className=" p-2 text-2xl">
                                            <TbArrowBigLeftLines/>
                                         </div>
                                    </div>
                                   
                                    <div className="p-2"><Navigetion/></div>
                                </div>
                                {/* content */}
                                <div className="content min-h-screen p-4">
                                    <Outlet/>
                                </div>
                                {/* footer */}

                                <div className="footer p-4 justify-items-center w-full">
                                    © AreoSale | Developed By A.R Tonmoy | V 1.00
                                </div>
                                
                            </div>
                        </div>
                        :
                        <div className="">
                            {/* sidebar */}
                            <div className="">
                                <div className={"w-16 fixed top-0 bg-base-100 h-screen "}>
                                    <div className="">
                                        <Ibar />
                                    </div>


                                </div>
                            </div>
                            {/* content */}
                            <div className={"ml-16 bg-base-200 bg-opacity-80 min-h-screen"}>
                                {/* navigetion */}
                                <div className="bg-white grid grid-cols-2 p-4">
                                    <div className="">
                                         <div onClick={() => setToggle(!toggle)} className=" p-2 text-2xl">
                                            <HiBars3BottomLeft/>
                                         </div>
                                    </div>
                                   
                                    <div className="p-2"><Navigetion/></div>
                                </div>
                                {/* content */}
                                <div className="content min-h-screen p-4">
                                    <Outlet/>
                                </div>
                                {/* footer */}

                                <div className="footer p-4 justify-items-center w-full">
                                    © AreoSale | Developed By A.R Tonmoy | V 1.00
                                </div>
                            </div>
                        </div>
                }

            </div>
        </div>
    );
};

export default Main;

// demo link https://invoika-laravel.themesbrand.website/dashboard