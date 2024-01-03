import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout, selectUser } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import Button from 'react-bootstrap/Button';
import PostCard from './PostCard';


export default function Profile( { posts, handlePostCreate, handlePostUpdate, handlePostDelete }) {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showCharacters, setShowCharacters] = useState(false)
    const [showDungeons, setShowDungeons] = useState(false)
    const [postContent, setPostContent] = useState("");

    const logoutUser = () => {
      fetch("/logout", { method: "DELETE" })
      .then(() => {
          dispatch(logout())
          navigate('/')
      })
    }
   
    const handleInputChange = (e) => {
      setPostContent(e.target.value);
    };

    function handleSubmit(e){
      e.preventDefault();
      handlePostCreate(postContent)
      setPostContent("")
    }
 
    // Check if user or user.characters is null before mapping
  const charactersArr = user?.characters || [];
  const characters = charactersArr.map((char) => (
    <CharacterCard key={char.id} info={char} />
  ));

    // Check if user or user.dungeons is null before mapping
  const dungeonsArr = user?.dungeon_master_campaigns || [];
  const dungeons = dungeonsArr.length > 0 ? (
    dungeonsArr.map((d) => (
      <div className="card" key={d.id}>
        <div className="container">
          <h4><b>{d.title}</b></h4>
          <p>{d.description}</p>
          <Button variant="primary">Delete</Button>
        </div>
      </div>
    ))
  ) : (
    <div className="card">
      <p>You don't have any dungeons yet. Create your own campaign to become a dungeon master and lead a party through your chosen quest.</p>
    </div>
  );
  
    // render userPosts only when there is a user
    const userPosts = user ? (
      posts.filter((p) => p.user.id === user.id)
    ) : [];
//  const userPosts = posts.filter((p) => p.user.id === user.id)
  const postsCards = userPosts.length > 0 ? (
      [...userPosts].reverse().map((p) => (
        <PostCard key={p.id} postData={p} handlePostUpdate={handlePostUpdate} handlePostDelete={handlePostDelete} />
      ))
    ) : (
      <p>No posts yet</p>
    );


  return (
    <>
        {user ?
        <div className='main'> 
            <h1>{user.username}</h1>
            <p>{user.bio}</p>
            <hr></hr>
            <div>
              <button onClick={logoutUser}>Sign Out</button>
            </div>
            <h3 onClick={() => {setShowCharacters(!showCharacters)}}>My Characters</h3>
            {showCharacters ? characters : null}{' '}
            <hr></hr>
            <h3 onClick={() => {setShowDungeons(!showDungeons)}}>My Dungeons</h3>
            {showDungeons ? dungeons : null }
            <hr></hr>
            <div className="card">
              <form onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    value={postContent} 
                    onChange={handleInputChange} 
                    placeholder="What's on your mind?"
                    />
                  <button type='submit'>Create Post</button>
              </form>
            </div>
            <div>
              {postsCards}
            </div>
        </div>
      : null }
    </>
  )
}
