import { configureStore } from "@reduxjs/toolkit";
import { usersListReducer } from "./slice/userSlice";
import { authenticationReducer } from "./slice/loginSlice";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    userList: usersListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
