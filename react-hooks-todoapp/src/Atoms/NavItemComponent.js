import React from 'react';
import {NavLink} from 'react-router-dom';

const NavItem = (props) => {
    return (
        <NavLink exact={true} to = {props.destination}>{props.page} </NavLink>
    )
}
export default NavItem;