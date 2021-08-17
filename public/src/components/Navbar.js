import React, {useState} from "react";
import {Link} from "react-router-dom";
import "../styles/Navbar.css";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {IconContext} from "react-icons";
import {NavbarData} from "./NavbarData";
import {useHistory} from "react-router-dom";

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    let history = useHistory();
    return (
        <>
            <IconContext.Provider value={{color: "#fff"}}>

                <div className="navbar">
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    <button className= "nav-button" onClick={() => {
                        history.push('/login')
                    }}> <span>Login </span>
                    </button>

                    <button className= "nav-button" onClick={() => {
                        history.push('/register')
                    }}> <span> Sign Up </span>
                    </button>

                </div>

                <nav className={sidebar ? 'nav-menu.active' : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="nav-toggle">
                            <Link to="#" className="nav-menu">
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        {NavbarData.map((item, index) => {
                            return (
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
