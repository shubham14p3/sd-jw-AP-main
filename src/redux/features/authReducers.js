import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  adminLogin,
  uploadAdminProfileImage,
  uploadAdminProfileCoverImage,
  adminSignup,
  confirmAdminEmail,
  updateAdminUserById,
  fetchAllUser,
  fetchAllProducts,
  fetchAdminUserById,
  fetchAllUserEmail,
  createSingleProduct,
} from "./authActions";

const initialState = {
  accessToken: undefined,
  loggedinUser: undefined,
  usersList: [],
  productList: [],
  userEmail: [],
  isLoading: false,
  isSuccess: false,
  isImagUploadedSuccess: false,
  isImageloadingSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.loggedinUser = payload.loggedinUser;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.loggedinUser = undefined;
      const cookies = Cookies.get();
      for (const cookie in cookies) {
        Cookies.remove(cookie);
      }
      localStorage.clear();
    },
    fetchAllUserDetails: (state, action) => {
      state.usersList = action.payload.usersList;
    },
    fetchAllProductsDetails: (state, action) => {
      state.productList = action.payload.productList;
    },
    fetchUserEmailSuccess: (state, action) => {
      state.userEmail = action.payload.userEmail;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(confirmAdminEmail.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(confirmAdminEmail.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(confirmAdminEmail.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
      })
      .addCase(uploadAdminProfileImage.pending, (state) => {
        state.isImagUploadedSuccess = false;
        state.isImageloadingSuccess = true;
        // handle pending state if needed
      })
      .addCase(uploadAdminProfileImage.fulfilled, (state, action) => {
        // handle fulfilled state
        state.isImagUploadedSuccess = true;
        state.isImageloadingSuccess = false;
      })
      .addCase(uploadAdminProfileImage.rejected, (state, action) => {
        // handle rejected state
        state.isImagUploadedSuccess = false;
        state.isImageloadingSuccess = false;
      })
      .addCase(fetchAllUserEmail.fulfilled, (state) => {})
      .addCase(fetchAllUserEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.error.message; // Log the error message
      });
  },
});

export const {
  userLoggedIn,
  userLoggedOut,
  fetchAllUserDetails,
  fetchAllProductsDetails,
  fetchUserEmailSuccess,
} = authSlice.actions;

export const selectAccessToken = (state) => state.auth.accessToken;
export const selectUser = (state) => state.auth.loggedinUser;

export default authSlice.reducer;
