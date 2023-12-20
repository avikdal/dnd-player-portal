import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import CreateCharacterForm from './components/CreateCharacterForm';
import CampaignsPage from './components/CampaignsPage';
import CreateCampaignForm from './components/CreateCampaignForm';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, selectUser } from './features/authSlice';



function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [campaigns, setCampaigns] = useState([])


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => {
          dispatch(setUser(user))
        });
      }
    });
  }, []);


  useEffect(() => {
    fetch('/campaigns')
    .then((r) => r.json())
    .then((campaigns) => setCampaigns(campaigns));
  }, [])


  return (
   <div>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/characters" element={<CreateCharacterForm campaigns={campaigns} />} />
      <Route exact path="/campaigns" element={<CampaignsPage campaigns={campaigns} />} />
      <Route exact path="/create-campaign" element={<CreateCampaignForm  />} />
    </Routes>
    </div>
  );
}

export default App;
