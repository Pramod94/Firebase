import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to="/">NewProject</NavLink></li>
            <li><NavLink to="/">LogOut</NavLink></li>
            <li><NavLink className="btn btn-floating pink lighten-2" to="/">PM</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;
