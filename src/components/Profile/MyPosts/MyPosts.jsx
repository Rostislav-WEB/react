import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = [
        { id: 1, message: 'Rostislav222', likesCount: 43 },
        { id: 2, message: '34433434', likesCount: 15 },
        { id: 3, message: 'blabla', likesCount: 2323 },
    ]
    let postsElements = posts
        .map(p => <Post message={p.message} likeCount={p.likesCount} />);

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;