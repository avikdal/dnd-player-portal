import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Signup from './Signup';


export default function Access() {
        const [showLogin, setShowLogin] = useState(true);
       
        
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

