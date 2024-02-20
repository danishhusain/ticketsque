// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

initialState = {
  isAuthenticated: false,
  isFirstTime: false,
  user: [],
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload
      };
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, logoutSuccess ,setUser} = authSlice.actions;
export const selectAuthState = (state) => state.auth;

export default authSlice.reducer;
