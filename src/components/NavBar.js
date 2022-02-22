import React from 'react'
import { NavLink } from 'react-router-dom'
import NavCSS from './NavBar.module.css';
import logo from '../images/logo.png';

export default function NavBar() {
  return (
    <div>
      <div className={NavCSS.logoDiv}>
        <img className={NavCSS.logoImg} src={logo} alt="logo" />
        <h1 className={NavCSS.heading}>MemeMatic</h1>
      </div>
      <div className={NavCSS.flexLink}>
        <NavLink
          className={({ isActive }) =>
            isActive ? NavCSS.activeLink : NavCSS.Link
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? NavCSS.activeLink : NavCSS.Link
          }
          to="/fav"
        >
          Favourites
        </NavLink>
      </div>
    </div>
  );
}
