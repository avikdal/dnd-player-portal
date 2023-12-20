import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/authSlice';
import LoginForm from './LoginForm';
import Signup from './Signup';



export default function Home() {
  const [posts, setPosts] = useState([])
  const [showLogin, setShowLogin] = useState(true);
  const user = useSelector(selectUser);

  useEffect(() => {
    fetch('/posts')
    .then((r) => r.json())
    .then((posts) => {
      console.log(posts)
      setPosts(posts)
    });
  }, [])

  console.log("user", user)

  if(user == null || user.error ){

    return(
      <div>
      {showLogin ? (
      <>
        <LoginForm />
        <p>
          Don't have an account? &nbsp;
          <button color="secondary" onClick={() => setShowLogin(false)}>
            Sign Up
          </button>
        </p>
      </>
    ) : (
      <>
        <Signup />
        <p>
          Already have an account? &nbsp;
          <button color="secondary" onClick={() => setShowLogin(true)}>
            Log In
          </button>
        </p>
      </>
    )}
    </div>
    )
  } else {

    const postsCards = posts.length > 0 ? (
      posts.map((p) => (
        <div className="card" key={p.id}>
          <h2>{p.user.username}</h2>
          <p>{p.content}</p>
        </div>
      ))
    ) : (
      <p>No posts available</p>
    );


  return (
    <div>
      <h1> Hello {user.username} </h1>
      <hr></hr>
      <div className="card">
        <p>Whats on your mind?</p>
      </div>
      <div className="row">
        <div className="leftcolumn">
          {postsCards}
        </div>
      </div>
    </div>
  )
  }
}