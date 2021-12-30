import React from "react";
import { NavLink } from 'react-router-dom'
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark-700x235.png" alt='' />
            <div className={s.loginBlock}>
                { props.isAuth ? props.login 
                : <NavLink to="/login">Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;