import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className="profile-info">
            <div>
                <img className={s.contentImg} src="https://worksolutions.ru/storage/ATSH21hp662efZ60ujh2VFFBMZoIIsLhhDOp5Vol.png"></img>
            </div>
            <div className={s.descriptionBlock}>Ava + description</div>
        </div>

    )
}

export default ProfileInfo;