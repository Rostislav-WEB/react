import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            MainContent
            <div>
                <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"></img>
            </div>
            <div>Ava + description</div>
            <div>
                My posts
                <div>New post</div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;