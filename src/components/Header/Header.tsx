import React, { useEffect } from "react";
import { setAuthUserData } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import axios from "axios";
import { NavLink } from 'react-router-dom'
import s from './Header.module.css';

type loginType = {
    id: number,
    login: string,
    email: string
}

const Header = (props: any) => {
    useEffect((): void => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then((response: any) => {
            if (response.data.resultCode === 0) {
                let { id, login, email }: loginType = response.data.data
                props.setAuthUserData(id, email, login)
            }
        });
    });
    return (
        <header className={s.header}>
            <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark-700x235.png" alt='' />
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to="/login">Login</NavLink>
                }
            </div>
        </header>
    )
}
const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, { setAuthUserData })(Header);
