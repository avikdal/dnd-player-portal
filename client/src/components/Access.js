import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Signup from './Signup';
import tavern from './tavern.jpg';



export default function Access() {
        const [showLogin, setShowLogin] = useState(true);

        const containerStyle = {
          backgroundImage: `url(${tavern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Set a minimum height to cover the entire viewport
          position: 'relative',
        };
       
        
  return (
    // <div style={{margin: '70px'}}>
    <div style={containerStyle}>
    <div style={{
               position: 'absolute',
               left: '50%',
               top: '25%',
               transform: 'translate(-50%, -50%)'
        }}>
      <div style={{  textAlign: "center", color: 'whitesmoke', backgroundColor: 'black' }}>
        <h2>Welcome to EpicQuest Tavern</h2>
        <p>Embark on epic adventures at EpicQuest Tavern, your go-to hub for Dungeons & Dragons character creation, questing, and connecting with fellow players in a vibrant community. Raise your tankard, roll the dice, and let the tales unfold in this immersive realm of imagination. </p>
      </div>

    {showLogin ? (
    <>
      <LoginForm />
      <p style={{  textAlign: "center", color: 'whitesmoke' }}>
        Don't have an account? &nbsp;
        <button color="secondary" onClick={() => setShowLogin(false)}>
          Sign Up
        </button>
      </p>
    </>
  ) : (
    <>
      <Signup />
      <p style={{  textAlign: "center", color: 'whitesmoke' }}>
        Already have an account? &nbsp;
        <button color="secondary" onClick={() => setShowLogin(true)}>
          Log In
        </button>
      </p>
    </>
  )}
  </div>
  </div>
  )
}

