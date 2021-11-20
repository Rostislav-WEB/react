import React from "react";
import { NavLink } from "react-router-dom";
import Friend from "./Friends/Friend";
import Friends from "./Friends/Friends";
import s from './Navbar.module.css';

const Navbar = (props) => {
    let friends = props.state.friends
    .map(f => <Friend name={f.friend} />);
    let activeStyle = {
        color: "red",
    };
    return (
        <div className={s.nav}>
            <nav>
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
            <Friends friends={friends} />
        </div>
    )
}

export default Navbar;