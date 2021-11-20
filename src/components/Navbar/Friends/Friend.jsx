import React from "react";
import s from './Friends.module.css';

const Friend = (props) => {
    return (
        <div className={s.dialog}>
            {props.name}
        </div>

    )
}

export default Friend;