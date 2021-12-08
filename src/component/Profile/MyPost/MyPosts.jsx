import React from 'react';
import style from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = (props) => {
    let postElement =
        props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} dispatch={props.dispatch} />)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    }
    return (
        <div className={`${style.item} ${style.active}`}>
            <textarea placeholder='Enter your post' onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            <div className={style.posts}>
                {postElement}
            </div> 
        </div>
    );
}
export default MyPosts;