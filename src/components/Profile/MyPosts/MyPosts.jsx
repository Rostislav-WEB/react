import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts
        .map(p => <Post message={p.message} likeCount={p.likesCount} />);
    let newPostElement = React.createRef();

    let addPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3 className={s.myPosts}>My posts</h3>
            <div>
                <div>
                    <textarea className={s.textarea} ref={newPostElement}></textarea>
                </div>
                <div>
                    <button className={s.button} onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;