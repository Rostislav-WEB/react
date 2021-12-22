import React from "react";
import Preloader from "../../commom/Preloader/Preloader";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />

    }
    return (
        <div className="profile-info">
            <div>
                {/* <img className={s.contentImg} src="https://worksolutions.ru/storage/ATSH21hp662efZ60ujh2VFFBMZoIIsLhhDOp5Vol.png"></img> */}
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large} alt="" />
                </div>
                <div>
                    <div>{props.profile.fullName} id:{props.profile.userId}</div>
                </div>
                <div>
                    <div>Github: {props.profile.contacts.github}</div>
                    <div>VK: {props.profile.contacts.vk != null ? props.profile.contacts.vk: <span>Нету</span> }</div>
                    <div>youtube: {props.profile.contacts.youtube != null ? props.profile.contacts.youtube: <span>Нету</span> }  </div>
                </div>
                <div>
                    <div>Работа: {props.profile.lookingForAJobDescription}</div>
                </div>

                Ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;