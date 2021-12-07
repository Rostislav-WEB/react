import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts
        .map(p => <Post message={p.message} likeCount={p.likesCount} />);
        
    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = (e) => {
        const text = e.target.value;
        props.updateNewPostText(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3 className={s.myPosts}>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} className={s.textarea}  />
                </div>
                <div>
                    <button className={s.button} onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;