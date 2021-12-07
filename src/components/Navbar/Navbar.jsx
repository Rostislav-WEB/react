import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import s from './Navbar.module.css';

const Navbar = (props) => {
    let activeStyle = {
        color: "black",
    };
    return (
        <div className={s.nav}>
            <nav>
                <div className={s.item}>
                    <NavLink className={s.linkText} to="/profile" style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={s.linkText} to="/dialogs" style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink  className={s.linkText} to="/news" style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink  className={s.linkText} to="/music" style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink className={s.linkText} to="/settings" style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>Settings</NavLink>
                </div>
            </nav>
            {/* <Friends state={props.state.friends} /> */}
        </div>
    )
}

export default Navbar;