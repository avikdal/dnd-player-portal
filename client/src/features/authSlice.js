import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  id: null,
  username: '',
  bio: '',
  posts: [],
  characters: [],
  campaigns: [],
  dungeon_master_campaigns: [],
};

const initialPostsState = [];

const initialCampaignsState = [];


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    
    user: { ...initialUserState },
    posts: [...initialPostsState],
    campaigns: [...initialCampaignsState],

    isAuthenticated: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    signupSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    addCharacter: (state, action) => {
      state.user.characters = [...state.user.characters, action.payload];
    },
    deleteCharacter: (state, action) => {
      state.user.characters = state.user.characters.filter(
        (character) => character.id !== action.payload
      );
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      const newPost = action.payload;

      // Update top-level posts state
      state.posts = [...state.posts, newPost];

      // Update user.posts state
      state.user.posts = [...state.user.posts, newPost];
    },
    editPost: (state, action) => {
      const updatedPost = action.payload;

      // Update top-level posts state
      state.posts = state.posts.map(post =>
        post.id === updatedPost.id ? updatedPost : post
      );

      // Update user.posts state
      state.user.posts = state.user.posts.map(post =>
        post.id === updatedPost.id ? updatedPost : post
      );
    },
    deletePost: (state, action) => {
      const postToDelete = action.payload;
    
      // Update top-level posts state
      state.posts = state.posts.filter((post) => post.id !== postToDelete.id);
    
      // Update user.posts state
      state.user.posts = state.user.posts.filter((post) => post.id !== postToDelete.id);
    },
    setCampaigns: (state, action) => {
      // console.log("action in sclice", action)
      state.campaigns = action.payload;
    },
    deleteCampaign: (state, action) => {
      state.user.campaigns = state.user.campaigns.filter(
        (campaign) => campaign.id !== action.payload
      );
    },   
    addDungeon: (state, action) => {
      const newDungeon = action.payload;

      // Update top-level posts state
      state.campaigns = [...state.campaigns, newDungeon];

      // Update user.posts state
      state.user.dungeon_master_campaigns = [...state.user.dungeon_master_campaigns, action.payload];
    },
  },
});

export const { 
  loginSuccess,
  signupSuccess,
  addCharacter,
  editCharacter,
  deleteCharacter,
  addPost,
  editPost,
  deletePost,
  addCampaign,
  deleteCampaign,
  addDungeon,
  setUser,
  setPosts, 
  setCampaigns,
  logout,
} = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectPosts = (state) => state.auth.posts;
export const selectCampaigns = (state) => state.auth.campaigns;
export default authSlice.reducer;


