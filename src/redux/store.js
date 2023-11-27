import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
// import { apiSlice } from "./api/apiSlice"; // Make sure to import apiSlice

const store = configureStore({
  devTools: import.meta.env.VITE_ENV !== "production",
  reducer: {
    auth: authSlice,
    // Add other slices here if needed
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiSlice.middleware), // Add apiSlice.middleware here
});

export default store;
