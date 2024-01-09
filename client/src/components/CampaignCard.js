import React, { useState } from 'react';
import tavern from './tavern.jpg';

export default function CampaignCard({ campaignInfo }) {
    const [dropDown, setDropDown] = useState(false)
    const { title, description, characters } = campaignInfo
   
    // add dungeon master to card
    // list all players & characters on card

    
   
  return (
    <div className="card">
      <img src={tavern} alt="Avatar" style={{ width: '100%' }} />
      <div className="container"> 
        <h4><b>{title}</b></h4>
        <hr></hr>
        <p>{description}</p>
        <button type="button" className="collapsible" onClick={() => {setDropDown(!dropDown)}}>Learn More</button>
        
        { dropDown ?
            <div className="content">
                <p>Player Count: {characters.length}</p>
            </div>
        : null }

      </div>
    </div>
  );
}
