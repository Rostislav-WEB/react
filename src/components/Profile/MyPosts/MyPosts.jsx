import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div>
                    <Post name='Rostislav' likeCount='15' />
                    <Post name='Alena' likeCount='20' />
                </div>
            </div>
    )
}

export default MyPosts;