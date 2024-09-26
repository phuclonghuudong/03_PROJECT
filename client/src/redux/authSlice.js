import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "",
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.login = action.payload;
    },
    logoutUser: (state) => {
      state.login = "";
    },
  },
});

export const { loginSuccess, logoutUser } = authSlice.actions;

export default authSlice.reducer;
