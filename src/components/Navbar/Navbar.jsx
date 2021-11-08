import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
    let activeStyle = {
        color: "red",
    };
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;