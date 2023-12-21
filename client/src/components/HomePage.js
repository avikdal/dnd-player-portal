import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, selectPosts, setPosts, addPost } from '../features/authSlice';
import PostCard from './PostCard';




export default function Home( { posts, handlePostCreate, handlePostUpdate, handlePostDelete } ) {
  const user = useSelector(selectUser);
  // const dispatch = useDispatch(selectPosts)
  const [postContent, setPostContent] = useState("");


    const postsCards = posts.length > 0 ? (
      [...posts].reverse().map((p) => (
        <PostCard key={p.id} postData={p} handlePostUpdate={handlePostUpdate} handlePostDelete={handlePostDelete} />
      ))
    ) : (
      <p>No posts yet</p>
    );

    const handleInputChange = (e) => {
      setPostContent(e.target.value);
    };

    function handleSubmit(e){
      e.preventDefault();
      handlePostCreate(postContent)
      setPostContent("")
    }
  
  

  return (
    <div>
      <h1> Hello {user.username} </h1>
      <hr></hr>
      <div className="card">
        <form onSubmit={handleSubmit}>
        <input type="text" value={postContent} onChange={handleInputChange} placeholder="What's on your mind?"/>
        <button type='submit'>Create Post</button>
        </form>
      </div>
      <div className="row">
        <div className="leftcolumn">
          {postsCards}
        </div>
      </div>
    </div>
  )
  //}
}