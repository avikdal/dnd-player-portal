import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/authSlice';




export default function NavBar() {
  const user = useSelector(selectUser);


  if (user && user.id !== null){

  return (
    <div className="topnav">
        <Link to="/home">Home</Link>
        <Link to="/campaigns">Campaigns</Link>
        <Link to="/characters">Character Creation</Link>
        <Link to="/profile" className="split">Profile</Link>
    </div>
  )
  }
  // } else {

  //   return (
  //     // <div >
  //     <div style={{  textAlign: "center" }}>
  //       <h2>Welcome to EpicQuest Tavern</h2>
  //       <p>Embark on epic adventures at EpicQuest Tavern, your go-to hub for Dungeons & Dragons character creation, questing, and connecting with fellow players in a vibrant community. Raise your tankard, roll the dice, and let the tales unfold in this immersive realm of imagination. </p>
  //     </div>
  //   )
  // }
}