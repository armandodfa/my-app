import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}><NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink></div>
            <div className={style.item}><NavLink to='/users' activeClassName={style.activeLink}>Users Page</NavLink></div>
            <div className={style.item}><NavLink to='/dialogs' activeClassName={style.activeLink}>Messages</NavLink></div>
            <div className={style.item}><NavLink to='/music' activeClassName={style.activeLink}>Music</NavLink></div>
            <div className={style.item}><NavLink to='/video' activeClassName={style.activeLink}>Video</NavLink></div>
            <br></br>
            <br></br>
            <div className={style.item}><NavLink to='/settings' activeClassName={style.activeLink}>Settings</NavLink></div>
        </nav>
    );
}

export default Navbar;