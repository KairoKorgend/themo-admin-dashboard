import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "src/app/api/apiSlice";
import authReducer from "src/features/auth/authSlice";
import uiReducer from "src/features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true, // This enables Redux DevTools
});
