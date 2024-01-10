import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Signup from './Signup';
import tavern from './tavern.jpg';
// import { useSelector } from 'react-redux';
// import { selectUser } from '../features/authSlice';
// import { useNavigate } from 'react-router-dom';



export default function Access() {
      const [showLogin, setShowLogin] = useState(true);
      // const user = useSelector(selectUser);
      // const navigate = useNavigate();

      // if user
  //         // Redirect to another page if the user is already signed in
  // useEffect(() => {
  //   if (user) {
  //     navigate('/home'); // Redirect to the home page or any other page
  //   }
  // }, [user, navigate]);

        const containerStyle = {
          backgroundImage: `url(${tavern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh', // Set a minimum height to cover the entire viewport
          position: 'relative',
        };

        const contentStyle = {
          textAlign: 'center',
          color: 'whitesmoke',
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Added some transparency to the background
          padding: '50px 20px 30px', // Adjusted padding (top 30px, vertical 20px, bottom 50px)
          width: '50%', 
          margin:  '0 auto', // 20px top margin, center horizontally
        };

        const formStyle = {
          color: 'whitesmoke',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '50px 20px',
          width: '50%', 
          margin: '0 auto', 
        };
       
        
  return (
  
    <div style={containerStyle}>
  
      <div  style={contentStyle}>
        <h2>Welcome to EpicQuest Tavern</h2>
        <p>Embark on epic adventures at EpicQuest Tavern, your go-to hub for Dungeons & Dragons character creation, questing, and connecting with fellow players in a vibrant community. Raise your tankard, roll the dice, and let the tales unfold in this immersive realm of imagination. </p>
      </div>
      <div style={formStyle}>
    {showLogin ? (
    <>
      <LoginForm />
      <p >
        Don't have an account? &nbsp;
        <button color="secondary" onClick={() => setShowLogin(false)}>
          Sign Up
        </button>
      </p>
    </>
  ) : (
    <>
      <Signup />
      <p >
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

