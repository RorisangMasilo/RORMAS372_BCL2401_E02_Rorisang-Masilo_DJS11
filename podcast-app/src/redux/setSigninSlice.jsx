import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openSignin: false,
};

const Signin = createSlice({
  name: "Signin",
  initialState,
  reducers: {
    openSignin: (state, action) => {
      state.openSignin = true;
    },
    closeSignin: (state) => {
      state.openSignin = false;
    },
  },
});

export const { openSignin, closeSignin } = Signin.actions;

export default Signin.reducer;
