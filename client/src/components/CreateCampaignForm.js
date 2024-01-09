import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addDungeon } from '../features/authSlice';

export default function CreateCampaignForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorList, setErrorList] = useState({})
    const [campaignInfo, setCampaignInfo] = useState({
      description: '',
      title: '',
    });
  
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setCampaignInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    };

  
    function handleSubmit(e){
      e.preventDefault();
          fetch('/campaigns', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(campaignInfo),
        }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            dispatch(addDungeon(data));
            navigate('/profile');
          })
        } else {
          response.json().then((errors) => setErrorList(errors));
        }
      })
    };

  
    return (
      <div className='createCharacterForm'>
      <form onSubmit={handleSubmit}>
        <label>
          Campaign Title:
          <input
            type="text"
            name="title"
            value={campaignInfo.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
            <input
                type="text"
                name="description"
                value={campaignInfo.description}
                onChange={handleChange}
                required
            />
        </label>
      
        {/* <label>
        Will you be playing in this campaign?
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </label> */}
        <ul>
        {errorList.errors.map((error, index) => ( <li key={index}>{error}</li> ))}
        </ul>
        <button type="submit" className="block">Create Campaign</button>
      </form>
      </div>
    );
  };