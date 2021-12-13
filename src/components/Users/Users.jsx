import React from "react";

const Users = (props) => {
    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoUrl} alt='Хуйня крч' />
                        </div>
                        <div>
                            {user.followed ? <button onClick={() => props.unFollow(user.id)}>unfollow</button> : 
                            <button onClick={() => props.follow(user.id)}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.city}</div>
                            <div>{user.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users;