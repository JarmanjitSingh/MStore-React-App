import { createReducer } from '@reduxjs/toolkit';

export const authReducer = createReducer(
  { isAuthenticated: false },
  {
    login: state => {
      localStorage.setItem('user', 'loggedin');
      state.isAuthenticated = true;
    },
    logout: state => {
      localStorage.removeItem('user');
      state.isAuthenticated = false;
    },
  }
);
