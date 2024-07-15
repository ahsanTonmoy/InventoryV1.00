import { NavLink } from 'react-router-dom';
import { LiaTachometerAltSolid } from "react-icons/lia";import './style.css'
import brand from '../../assets/image/brand/icons8-inventory-32.png'

const Sidebar = () => {
    const Menus = <>
        {/*  */}
        <li className='text-base capitalize'><NavLink className={'navItem'} to={'/eee'}><span className='px-1'><LiaTachometerAltSolid /></span>deshboard</NavLink>
        </li>
        {/*  */}
        <li className='text-base capitalize'>
            <details>
                <summary><span className='px-1'><LiaTachometerAltSolid /></span>cetagory</summary>
                <ul className='hasDropdown bg-base-200 bg-opacity-35'>
                    <li className='text-base capitalize'><NavLink to={'/iii'}><span className='px-1'><LiaTachometerAltSolid /></span>deshboard</NavLink>
                    </li>
                    <li className='text-base capitalize'><NavLink to={'/jijj'}><span className='px-1'><LiaTachometerAltSolid /></span>deshboard</NavLink>
                    </li>

                </ul>
            </details>
        </li>
       
    </>
    return (
        <div>
            <div className="w-full px-2">
                {/* Brand */}
                <div className="brand h-12 p-2 flex justify-center gap-2">
                    <div className="">
                        <img src={brand} alt="" />
                    </div>
                    <div className="font-semibold py-1 text-xl">
                        Areo<span className='text-[#1A8998]'>Sale</span>
                    </div>
                </div>

                {/* menus */}
                <div className="py-4">
                    <ul className="menu">
                        {Menus}
                    </ul>
                </div>

            </div>

            
        </div>
    );
};

export default Sidebar;