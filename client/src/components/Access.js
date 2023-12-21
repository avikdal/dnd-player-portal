import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { selectUser } from '../features/authSlice';
import LoginForm from './LoginForm';
import Signup from './Signup';


export default function Access() {
        const [posts, setPosts] = useState([])
        const [showLogin, setShowLogin] = useState(true);
        const user = useSelector(selectUser);
        
  return (
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
}

