import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/authSlice';
import PostCard from './PostCard';


export default function Home( { posts, handlePostCreate, handlePostUpdate, handlePostDelete } ) {
  const user = useSelector(selectUser);
  const [error, setError] = useState('');
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
       // Trim the content and check if it's blank
       const trimmedContent = postContent.trim();
       if (trimmedContent === '') {
         setError('Post cannot be blank');
         return;
       } 
      handlePostCreate(postContent)
      setPostContent("")
      setError(''); // Reset the error state
    }
  

  return (
    <div>
      <hr></hr>
      <div className="card">
        <form onSubmit={handleSubmit}>
        <input type="text" value={postContent} onChange={handleInputChange} placeholder="What's on your mind?"/>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
}