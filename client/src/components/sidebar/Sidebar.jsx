import { NavLink } from 'react-router-dom';
import { FaTachometerAlt } from "react-icons/fa";
import './style.css'
import brand from '../../assets/image/brand/icons8-inventory-32.png'

const Sidebar = () => {
    const Menus = <>
        {/*  */}
        <li className='text-base capitalize'><NavLink className={'navItem'} to={'/eee'}><span className='px-1'><FaTachometerAlt /></span>deshboard</NavLink>
        </li>
        {/*  */}
        <li className='text-base capitalize'>
            <details>
                <summary><span className='px-1'><FaTachometerAlt /></span>cetagory</summary>
                <ul className='hasDropdown'>
                    <li className='text-base capitalize'><NavLink to={'/'}><span className='px-1'><FaTachometerAlt /></span>deshboard</NavLink>
                    </li>
                    <li className='text-base capitalize'><NavLink to={'/jijj'}><span className='px-1'><FaTachometerAlt /></span>deshboard</NavLink>
                    </li>

                </ul>
            </details>
        </li>
        {/*  */}
        <li className='text-base capitalize'>
            <details>
                <summary><span className='px-1'><FaTachometerAlt /></span>cetagory</summary>
                <ul className='hasDropdown'>
                    <li className='text-base capitalize'><NavLink to={'/jijj'}><span className='px-1'><FaTachometerAlt /></span>deshboard</NavLink>
                    </li>
                    <li className='text-base capitalize'><NavLink to={'/jijj'}><span className='px-1'><FaTachometerAlt /></span>deshboard</NavLink>
                    </li>

                </ul>
            </details>
        </li>
        {/*  */}
        <li className='text-base capitalize'>
            <details>
                <summary><span className='px-1'><FaTachometerAlt /></span>cetagory</summary>
                <ul className='hasDropdown'>
                    <li className='text-base capitalize'><NavLink to={'/jijj'}><span className='px-1'><FaTachometerAlt /></span>deshboard</NavLink>
                    </li>
                    <li className='text-base capitalize'><NavLink to={'/jijj'}><span className='px-1'><FaTachometerAlt /></span>deshboard</NavLink>
                    </li>

                </ul>
            </details>
        </li>
        {/*  */}
        <li className='text-base capitalize'>
            <details>
                <summary><span className='px-1'><FaTachometerAlt /></span>cetagory</summary>
                <ul className='hasDropdown'>
                    <li className='text-base capitalize'><NavLink to={'/jijj'}><span className='px-1'><FaTachometerAlt /></span>deshboard</NavLink>
                    </li>
                    <li className='text-base capitalize'><NavLink to={'/jijj'}><span className='px-1'><FaTachometerAlt /></span>deshboard</NavLink>
                    </li>

                </ul>
            </details>
        </li>
        {/*  */}
        <li className='text-base capitalize'>
            <details>
                <summary><span className='px-1'><FaTachometerAlt /></span>cetagory</summary>
                <ul className='hasDropdown'>
                    <li className='text-base capitalize'><NavLink to={'/jijj'}><span className='px-1'><FaTachometerAlt /></span>deshboard</NavLink>
                    </li>
                    <li className='text-base capitalize'><NavLink to={'/jijj'}><span className='px-1'><FaTachometerAlt /></span>deshboard</NavLink>
                    </li>

                </ul>
            </details>
        </li>
        {/*  */}
        <li className='text-base capitalize'>
            <details>
                <summary><span className='px-1'><FaTachometerAlt /></span>cetagory</summary>
                <ul className='hasDropdown'>
                    <li className='text-base capitalize'><NavLink to={'/jijj'}><span className='px-1'><FaTachometerAlt /></span>deshboard</NavLink>
                    </li>
                    <li className='text-base capitalize'><NavLink to={'/jijj'}><span className='px-1'><FaTachometerAlt /></span>deshboard</NavLink>
                    </li>

                </ul>
            </details>
        </li>
    </>
    return (
        <div>
            <div className="w-full ">
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

                <div className="">flglg</div>
            </div>

            
        </div>
    );
};

export default Sidebar;