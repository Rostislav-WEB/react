/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect } from "react";
import { setAuthUserData, getAuthUserData } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom'
import s from './Header.module.css';




const Header = (props: any) => {
    useEffect((): void => {
        props.getAuthUserData()
    }, []);
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
export default connect(mapStateToProps, { setAuthUserData, getAuthUserData })(Header);
