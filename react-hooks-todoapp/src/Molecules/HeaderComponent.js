import React, {useState, useEffect} from 'react';
import NavItem from '../Atoms/NavItemComponent';
import {useLocation} from 'react-router-dom'

const HeaderComponent = () => {
    const [active, setActive] = useState(false)
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname === "/"){
            setActive(true)
        }else if(location.pathname === "/about"){
            setActive(true)
        }else if(location.pathname === "/contact"){
            setActive(true)
        }
    },[location.pathname]);
    
    
    return (
        <header className="header">
            <div className="container-fluid">
                <ul>
                    <li><NavItem isActive = {active} destination="/" page="Home" /></li>
                    <li><NavItem isActive = {active} destination="/about" page="About" /></li>
                    <li><NavItem isActive = {active} destination="/contact" page="Contact" /></li>
                </ul>
            </div>
        </header>
    )
}
export default HeaderComponent