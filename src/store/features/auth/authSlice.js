import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  otp: "1111", // Hardcoded OTP for login
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      if (action.payload === state.otp) {
        state.isAuthenticated = true;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
