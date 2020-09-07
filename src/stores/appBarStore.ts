import { createSlice } from "@reduxjs/toolkit";

const appBarSlice = createSlice({
  name: "appBar",
  initialState: false as boolean,
  reducers: {
    toggleAppBar(state) {
      return !state;
    },
    openAppBar() {
      return true;
    },
    closeAppBar() {
      return false;
    },
  },
});

export const { toggleAppBar, openAppBar, closeAppBar } = appBarSlice.actions;

export default appBarSlice.reducer;
