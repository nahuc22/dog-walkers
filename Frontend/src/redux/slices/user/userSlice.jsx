import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    isAuthenticated: false,
    register: {
      loading: false,
      success: false,
      error: null,
    }
  };
  
  const userSlice = createSlice({
    name: 'user',
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
      register: (state) => {
        state.register = {
          loading: false,
          success: false,
          error: null,
        };
      },
    }
  });

export const { login, logout, register} = userSlice.actions;
export default userSlice.reducer;