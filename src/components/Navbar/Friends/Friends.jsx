import React from "react";
import Friend from "./Friend";
import s from './Friends.module.css';

const Friends = (props) => {
    let friend = props.state
        .map(f => <Friend name={f.name} />);

    return (
        <div className={s.sidebar}>
            <div className={s.friends}>Friends</div>
            <div className={s.wrapperFriends}>
                {friend}
            </div>
        </div>

    )
}

export default Friends;