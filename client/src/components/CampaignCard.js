import React, { useState } from 'react';
import tavern from './tavern.jpg';

export default function CampaignCard({ campaignInfo }) {
    const [dropDown, setDropDown] = useState(false)
    const { title, description, dungeon_master_id, characters, users } = campaignInfo
    const dungeonMaster = users.find((user) => user.id === dungeon_master_id)


   
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
                <p>Dungeon Master: {dungeonMaster ? dungeonMaster.username : 'Not Available'} </p>
                <p>Player Count: {characters.length}</p>
            </div>
        : null }

      </div>
    </div>
  );
}
