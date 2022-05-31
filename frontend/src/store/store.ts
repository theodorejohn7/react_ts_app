import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    userList: userListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
