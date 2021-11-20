import React from "react";
import Friend from "./Friend";
import s from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={s.sidebar}>
            <div className={s.item}>Friends</div>
            <div>
                {props.state}
            </div>
        </div>

    )
}

export default Friends;