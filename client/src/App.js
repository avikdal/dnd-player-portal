import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import CreateCharacterForm from './components/CreateCharacterForm';
import CampaignsPage from './components/CampaignsPage';
import CreateCampaignForm from './components/CreateCampaignForm';
import Access from './components/Access';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, selectUser, setPosts, selectPosts, addPost, editPost, deletePost, setCampaigns, selectCampaigns } from './features/authSlice';



function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);
  const campaigns = useSelector(selectCampaigns);
  const [errors, setErrors] = useState([]);


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => {
          dispatch(setUser(user))
        });
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }, [dispatch]);


  useEffect(() => {
    fetch('/campaigns')
    .then((r) => r.json())
    .then((campaigns) =>  dispatch(setCampaigns(campaigns)));
  }, [dispatch])

  useEffect(() => {
    fetch('/posts')
    .then((r) => r.json())
    .then((postsData) => {
      dispatch(setPosts(postsData));
    });
  }, [dispatch])

  function handlePostCreate(postContent){
    fetch('/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user.id,
        content: postContent,
      }),
    })
    .then(r => {
      if (r.ok){
      r.json().then(newPost => dispatch(addPost(newPost)));
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }
  


  // update post
  function handlePostUpdate(updatedPost) {
    let id = updatedPost.id

    fetch(`/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    })
    .then(r => {
      if (r.ok){
      r.json().then(updatedPostData => dispatch(editPost(updatedPostData)));  // Dispatch the editPost action to update the Redux state
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
  }

  // delete a post
  function handlePostDelete(post) {
    fetch(`/posts/${post.id}`, {
       method: 'DELETE',
    })
    .then(() => {
      // Dispatch an action to remove the post from the Redux state
      dispatch(deletePost(post));
    })
    .catch((error) => {
      console.error('Error deleting post:', error);
    });
  }


  return (
   <div>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Access />} />
      <Route exact path="/home" element={<HomePage posts={posts} handlePostCreate={handlePostCreate} handlePostUpdate={handlePostUpdate} handlePostDelete={handlePostDelete} errors={errors} />} />
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/profile" element={<Profile posts={posts} handlePostCreate={handlePostCreate} handlePostUpdate={handlePostUpdate} handlePostDelete={handlePostDelete} errors={errors} />} />
      <Route exact path="/characters" element={<CreateCharacterForm campaigns={campaigns} />} />
      <Route exact path="/campaigns" element={<CampaignsPage campaigns={campaigns} />} />
      <Route exact path="/create-campaign" element={<CreateCampaignForm  />} />
    </Routes>
    </div>
  );
}

export default App;
