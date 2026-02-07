import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { postApi } from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postApi.reducerPath]: postApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(postApi.middleware);
  },
});
