// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

initialState = {
  isAuthenticated: false,
  isFirstTime: true,
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
    setIsFirstTime: (state, action) => {
      return {
        ...state,
        isFirstTime: action.payload
      };
    },
  },
});

export const { loginSuccess, logoutSuccess, setUser,setIsFirstTime } = authSlice.actions;
export const selectAuthState = (state) => state.auth;

export default authSlice.reducer;
