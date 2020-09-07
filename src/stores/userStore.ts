import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  isAuth: boolean;
  authKey?: string;
  username?: string;
  avatar?: string;
  email?: string;
};

const userSlice = createSlice({
  name: "user",
  initialState: { isAuth: false } as User,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {},
  },
});

export const { addTodo } = userSlice.actions;

export default userSlice.reducer;
