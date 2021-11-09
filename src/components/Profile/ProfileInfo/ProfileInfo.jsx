import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className="profile-info">
            <div>
                <img className={s.contentImg} src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"></img>
            </div>
            <div className={s.descriptionBlock}>Ava + description</div>
        </div>

    )
}

export default ProfileInfo;