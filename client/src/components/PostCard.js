import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/authSlice';

export default function PostCard( { postData, handlePostUpdate, handlePostDelete } ) {
    const user = useSelector(selectUser);
    const [postContent, setPostContent] = useState(postData.content);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState('');

  
    const handleEditClick = () => {
        setIsEditing(true);
      };   
      
    function handleDeleteClick(){
        handlePostDelete(postData)
    }

    function handleCancelUpdate(){
      setIsEditing(false);
      setPostContent(postData.content); // Reset post content to original value
      setError(''); // Reset the error state
    }

    const handleInputChange = (e) => {
        setPostContent(e.target.value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Trim the content and check if it's blank
        const trimmedContent = postContent.trim();
        if (trimmedContent === '') {
          setError('Post cannot be blank');
          return;
        }

        const updatedPost = { ...postData, content: postContent };
        handlePostUpdate(updatedPost);
        setIsEditing(false); // Reset the editing state
        setError(''); // Reset the error state
    };
    

    if (isEditing) {
        return (
          <div>
            <div className="card">
              <h2>{postData.user.username}</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="content"
                  value={postContent}
                  onChange={handleInputChange}
                />
                <button type="submit">Update Post</button>
                <button type="button" onClick={handleCancelUpdate}> Cancel Update </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </form>
            </div>
          </div>
        );
      }


    if (postData.user.id === user.id) {
        return (
            <div>
                <div className="card">
                    <h2>{postData.user.username}</h2>
                    <p>{postData.content}</p>
                    <button onClick={handleEditClick}>Edit Post</button> &nbsp;
                    <button onClick={handleDeleteClick}>Delete Post</button>
                </div>
            </div>
        )
    } else { 
        return (
            <div>
                <div className="card">
                    <h2>{postData.user.username}</h2>
                    <p>{postData.content}</p>
                </div>
            </div>
        )
    }
}




