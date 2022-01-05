import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../Accets/images/profile.png'
import styles from './Users.module.css'
import { Navigate } from 'react-router-dom';

const Users = (props) => {
    if (props.isAuth === false) {
        return <Navigate to="/login/" /> 
    }
    let pagesCount = Math.ceil((props.totalUsersCount / 150) / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map((page, index) => {
                //     className={s.linkText} to="/users" style={({ isActive }) =>
                //     isActive ? activeStyle : undefined
                // }
                    return <span key={index}
                        onClick={(e) => { props.onPageChanged(page) }}
                        className={props.currentPage === page ? styles.selectedPage : ''}>
                        {page}
                        </span>
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>

                            <NavLink to={`/profile/${user.id}`}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
                            </NavLink>

                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                   props.unFollow(user.id)
                                }}>Отписаться</button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id)
                                }}>Подписаться</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users;