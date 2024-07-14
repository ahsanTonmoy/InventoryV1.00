import { NavLink } from 'react-router-dom';
import brand from '../../assets/image/brand/icons8-inventory-32.png'
import { FaTachometerAlt } from "react-icons/fa";
import './style.css'
const Ibar = () => {
    const Menus = <>
        {/*  */}
        <li className='text-lg capitalize font-medium'><NavLink className={'navItem'} to={'/eee'} title='deshboaer'><span className='px-1'><FaTachometerAlt /></span></NavLink>
        </li>
        {/*  */}
        <li className='text-lg capitalize font-medium'><NavLink className={'navItem'} to={'/eee'} title='deshboaer'><span className='px-1'><FaTachometerAlt /></span></NavLink>
        </li>
        {/*  */}
        <li className='text-lg capitalize font-medium'><NavLink className={'navItem'} to={'/eee'} title='deshboaer'><span className='px-1'><FaTachometerAlt /></span></NavLink>
        </li>

    </>
    return (
        <div>
            {/* for icon navigetion */}
            <div className="Micon">
                {/* Brand */}
                <div className="brand h-12 p-2 flex justify-center gap-2">
                    <div className="">
                        <img src={brand} alt="" />
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

export default Ibar;