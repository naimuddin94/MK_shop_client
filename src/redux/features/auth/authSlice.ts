import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    removeUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;

export const currentToken = (state: RootState) => state.auth.token;
export const currentUser = (state: RootState) => state.auth.user;
