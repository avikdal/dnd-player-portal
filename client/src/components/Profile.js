import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, logout, selectUser } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import CharacterCard from './CharacterCard';


export default function Profile() {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showCharacters, setShowCharacters] = useState(false)
    const [showDungeons, setShowDungeons] = useState(false)


    const logoutUser = () => {
      fetch("/logout", { method: "DELETE" })
      .then(() => {
          console.log("check that logged out")
          dispatch(logout())
          navigate('/')
      })
    }
    console.log("user in profile", user)

 
    // Check if user or user.characters is null before mapping
  const charactersArr = user?.characters || [];
  const characters = charactersArr.map((char) => (
    <CharacterCard key={char.id} info={char} />
  ));

    // Check if user or user.dungeons is null before mapping
  const dungeonsArr = user?.dungeon_master_campaigns || [];
  console.log("dungeonsArr", dungeonsArr)

   
  const postsArr = user?.posts || [];
  const postsCards = postsArr?.map((p) => {
    return (
      <div className="card" key={p.id}>
        <p>{p.content}</p>
      </div>
      )
    })

  console.log("posts", postsArr)

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
            <h3 onClick={() => {setShowDungeons(!showDungeons)}}>My Dungeons</h3>
            {showDungeons ? "dungeons" : null }
            <div className="card">
              <p>Whats on your mind?</p>
            </div>
            <div>
              {postsCards}
            </div>
        </div>
      : null }
    </>
  )
}
