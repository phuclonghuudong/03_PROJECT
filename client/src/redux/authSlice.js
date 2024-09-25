import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // loginStart: (state) => {
    //   state.login.isFetching = true;
    // },
    loginSuccess: (state, action) => {
      state.login = action.payload;
    },
    // loginFailed: (state) => {
    //   state.login.isFetching = false;
    //   state.login.error = true;
    // },
  },
});

export const { loginSuccess } = authSlice.actions;

export default authSlice.reducer;
