import React from 'react';
import {Link} from 'react-router-dom';

const NavItem = (props) => {
    return (
        <Link className = {props.isActive ? "active" : ""} to = {props.destination}>{props.page} </Link>
    )
}
export default NavItem;