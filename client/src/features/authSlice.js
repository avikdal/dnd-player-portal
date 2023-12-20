import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  // initialState: { user: null, isAuthenticated: false },
  initialState: {
    user: {
      id: null,
      username: '',
      bio: '',
      posts: [],
      characters: [],
      campaigns: [],
    },
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
    addCharacter: (state, action) => {
      state.user.characters = [...state.user.characters, action.payload];
    },
    // Add other action handlers as needed (e.g., editCharacter, deleteCharacter, addPost, deletePost, addCampaign, deleteCampaign)
   
    setUser: (state, action) => {
      console.log("action in sclice", action)
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },

    // setUser: (state, action) => {
    //   const updatedUser = { ...state.user }; // Create a copy of the user object
    //   updatedUser.characters = [...state.user.characters, action.payload]; // Add the new character to the characters array
    //   state.user = updatedUser; // Update the user state
    //   state.isAuthenticated = !!action.payload;
    // },


    // setUser: (state, action) => {
    //   const { type, payload } = action;

    //   switch (type) {
    //     case 'UPDATE_PROFILE':
    //       state.user = { ...state.user, ...payload };
    //       break;

    //     case 'ADD_CHARACTER':
    //       state.user.characters = [...state.user.characters, payload];
    //       state.isAuthenticated = true; // Assuming adding a character means the user is authenticated
    //       break;

    //     // Add more cases as needed...

    //     default:
    //       break;
    //   }
    // },
    //dispatch(setUser({ type: 'ADD_CHARACTER', payload: newCharacter }));

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, signupSuccess, addCharacter, setUser, logout } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
