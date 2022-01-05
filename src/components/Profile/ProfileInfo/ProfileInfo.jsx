import React from "react";
import Preloader from "../../commom/Preloader/Preloader";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className="profile-info">

            <div className={s.descriptionBlock}>
                {props.loading && <Preloader />}
                {props.loading === false && (
                    <div>
                        <div>
                            <img src={props.data.photos.large} alt="" />
                        </div>
                        <div>
                            <div>{props.data.fullName}</div>
                            <div>id:{props.data.userId}</div>
                        </div>
                        <div>
                            <div>Github: {props.data.contacts.github != null ? props.data.contacts.github : <span>Нету</span> }</div>
                            <div>VK: {props.data.contacts.vk != null ? props.data.contacts.vk : <span>Нету</span>}</div>
                            <div>youtube: {props.data.contacts.youtube != null ? props.data.contacts.youtube : <span>Нету</span>}  </div>
                        </div>
                        <div>
                            <div>Работа: {props.data.lookingForAJobDescription != null ? props.data.lookingForAJobDescription : <span>Нету</span> }</div>

                        </div>
                    </div>
                )}

            </div>
        </div>

    )
}

export default ProfileInfo;