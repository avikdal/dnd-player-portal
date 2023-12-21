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
    .then((campaigns) =>  dispatch(setCampaigns(campaigns)));
  }, [])

  useEffect(() => {
    fetch('/posts')
    .then((r) => r.json())
    .then((postsData) => {
      dispatch(setPosts(postsData));
    });
  }, [])

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
      .then((r) => r.json())
      .then((newPost) => {
        // Dispatch an action to add the new post to the Redux state
        dispatch(addPost(newPost));
      })
      .catch((error) => {
        console.error('Error creating post:', error);
      });
  };

  // update post
  function handlePostUpdate(updatedPost) {
    console.log("updated post in app", updatedPost)
    let id = updatedPost.id

    fetch(`/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    })
      .then((r) => r.json())
      .then((updatedPostData) => {
        // Dispatch the editPost action to update the Redux state
        dispatch(editPost(updatedPostData));
      })
      .catch((error) => {
        console.error('Error updating post:', error);
      });
  }

  // delete a post
  function handlePostDelete(post) {
    console.log("post to delete in app", post)
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
      <Route exact path="/home" element={<HomePage posts={posts} handlePostCreate={handlePostCreate} handlePostUpdate={handlePostUpdate} handlePostDelete={handlePostDelete} />} />
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/profile" element={<Profile posts={posts} handlePostCreate={handlePostCreate} handlePostUpdate={handlePostUpdate} handlePostDelete={handlePostDelete} />} />
      <Route exact path="/characters" element={<CreateCharacterForm campaigns={campaigns} />} />
      <Route exact path="/campaigns" element={<CampaignsPage campaigns={campaigns} />} />
      <Route exact path="/create-campaign" element={<CreateCampaignForm  />} />
    </Routes>
    </div>
  );
}

export default App;
