import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    isAuthenticated: false,
  };
  
  const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      login: (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.isAuthenticated = true;
      },
      logout: (state) => {
        state.name = '';
        state.email = '';
        state.isAuthenticated = false;
      },
    },
  });

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;