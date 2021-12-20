import React from 'react';
import userPhoto from '../../Accets/images/profile.png'
import styles from './Users.module.css'

const Users = (props) => {
    let pagesCount = Math.ceil((props.totalUsersCount / 150) / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span key={page.id}
                        onClick={(e) => { props.onPageChanged(page) }}
                        className={props.currentPage === page && styles.selectedPage}>
                        {page}</span>
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => props.unFollow(user.id)}>unfollow</button>
                                : <button onClick={() => props.follow(user.id)}>follow</button>}
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