import React from "react";
import * as axios from "axios";
import userPhoto from '../../Accets/images/profile.png'
const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""  />
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