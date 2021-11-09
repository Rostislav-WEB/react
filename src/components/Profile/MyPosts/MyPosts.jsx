import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                   <div>
                        <button>Add post</button>
                   </div>
                   
                </div>
                <div className={s.posts}>
                    <Post name='Rostislav' likeCount='15' />
                    <Post name='Alena' likeCount='20' />
                </div>
            </div>
    )
}

export default MyPosts;