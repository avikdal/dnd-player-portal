import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCharacter } from '../features/authSlice';

export default function CreateCharacterForm({ campaigns }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [characterInfo, setCharacterInfo] = useState({
    character_class: '',
    race: '',
    alignment: '',
    name: '',
    image: '', // provide a default image URL ???
    campaign_id: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacterInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  function handleSubmit(e){
    e.preventDefault();

        fetch('/characters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(characterInfo),
      }).then((response) => {
      if (response.ok) {
        response.json().then((newCharacter) => {
            dispatch(addCharacter(newCharacter));
            navigate('/profile');
        })
      } else {
        console.error('Character creation failed:', response);
      }
    })
  };

  return (
    <div className='createCharacterForm'>
    <form onSubmit={handleSubmit}>
      <label>
        Character Class:
        <select
          name="character_class"
          value={characterInfo.characterClass}
          onChange={handleChange}
          required
        >
          <option value="">Select Class</option>
          <option value="Fighter">Fighter</option>
          <option value="Druid">Druid</option>
          <option value="Monk">Monk</option>
          <option value="Warlock">Warlock</option>
          <option value="Artificer">Artificer</option>
          <option value="Barbarian">Barbarian</option>
          <option value="Paladin">Paladin</option>
          <option value="Ranger">Ranger</option>
          <option value="Sorcerer">Sorcerer</option>
          <option value="Cleric">Cleric</option>
          <option value="Bard">Bard</option>
          <option value="Rogue">Rogue</option>
          <option value="Wizard">Wizard</option>
        </select>
      </label>
      <label>
        Race:
        <select
            name="race"
            value={characterInfo.race}
            onChange={handleChange}
            required
        >
          <option value="">Select Class</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Halfling">Halfling</option>
          <option value="Human">Human</option>
          <option value="Dragonborn">Dragonborn</option>
          <option value="Gnome">Gnome</option>
          <option value="Half-Elf">Half-Elf</option>
          <option value="Half-Orc">Half-Orc</option>
          <option value="Tiefling">Tiefling</option>
        </select>
      </label>
      <label>
        Alignment:
        <select
            name="alignment"
            value={characterInfo.alignment}
            onChange={handleChange}
            required
        >
            <option value="">Select Alignment</option>
            <option value="Lawful Good">Lawful Good</option>
            <option value="Neutral Good">Neutral Good</option>
            <option value="Chaotic Good">Chaotic Good</option>
            <option value="Lawful Neutral">Lawful Neutral</option>
            <option value="True Neutral">True Neutral</option>
            <option value="Chaotic Neutral">Chaotic Neutral</option>
            <option value="Lawful Evil">Lawful Evil</option>
            <option value="Neutral Evil">Neutral Evil</option>
            <option value="Chaotic Evil">Chaotic Evil</option>
        </select>
      </label>
      <label>
        Character Name:
        <input
          type="text"
          name="name"
          value={characterInfo.name}
          onChange={handleChange}
          required
        />
      </label>
      {/* <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={characterInfo.image}
          onChange={handleChange}
        />
      </label> */}
      <label>
        Campaign:
        <select
          name="campaign_id"
          value={characterInfo.campaign_id}
          onChange={handleChange}
          required
        >
          <option value="">Select Campaign</option>
          {campaigns.map((campaign) => (
            <option key={campaign.id} value={campaign.id}>
              {campaign.title}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Create Character</button>
    </form>
    </div>
  );
};


