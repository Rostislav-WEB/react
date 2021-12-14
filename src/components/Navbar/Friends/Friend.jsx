import React from "react";
import s from './Friends.module.css';

const Friend = (props) => {
    return (
        <div className={s.dialog}>
            <div>
                <img className={s.img} src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" alt='' />
            </div>
            <div>
                {props.name}
            </div>

        </div>

    )
}

export default Friend;