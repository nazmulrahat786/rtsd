import React from 'react';
import { NavLink } from 'react-router';
import "../Header/h.css"

const Header = () => {
    return (
        <div>
            <h1>waee</h1>
            <nav>
               <NavLink to={"/"}>Home</NavLink>
              
               <NavLink to={"/mbls"}>Mobile</NavLink>
               <NavLink to={"/users"}>User</NavLink>
               <NavLink to={"/users2"}>User2</NavLink>
               <NavLink to={"/usersdtls"}>Userdtls</NavLink>
               
            </nav>
        </div>
    );
};

export default Header;