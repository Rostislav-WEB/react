import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.content__img} src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"></img>
            </div>
            <div>Ava + description</div>
            <MyPosts />
        </div>

    )
}

export default Profile;