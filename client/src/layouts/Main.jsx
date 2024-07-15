import { useState } from "react";
import Sidebar from './../components/sidebar/Sidebar';
import Ibar from './../components/sidebar/Ibar';
const Main = () => {
    const [toggle, setToggle] = useState(true);
    const [menu, setMenu] = useState(true);

    return (
        <div>
            {/* main layout */}
            {/*  */}
            <div className="main-layout">
                {
                    toggle ?
                        <div className="">
                            {/* sidebar */}
                            <div className="">
                                <div className="">
                                    <div className={"bg-base-100 h-screen md:w-60 fixed top-0"}>
                                        <Sidebar />
                                    </div>
                                </div>

                            </div>

                            {/* content */}
                            <div className={"bg-base-300 ml-60 p-10 min-h-screen"}>
                                <div onClick={() => setToggle(!toggle)} className="btn">open</div>
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
                            <div className={"ml-16 p-10 bg-base-300 min-h-screen"}>
                                <div onClick={() => setToggle(!toggle)} className="btn">open</div>
                            </div>
                        </div>
                }

            </div>
        </div>
    );
};

export default Main;

// demo link https://invoika-laravel.themesbrand.website/dashboard