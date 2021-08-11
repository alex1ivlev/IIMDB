import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../styles/Navbar.css";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {IconContext} from "react-icons";
import {NavbarData} from "./NavbarData";

export default function Navbar(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <IconContext.Provider value={{color: "#fff"}}>

        <div className="navbar">
            <Link to="#" className='menu-bars'>
               <FaIcons.FaBars  onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu.active' : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="nav-toggle">
                <Link to="#" className="nav-menu">
                    <AiIcons.AiOutlineClose/>
                </Link>
                </li>
                {NavbarData.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}

            </ul>

        </nav>
        </IconContext.Provider>
    </>
    )

}
