import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  adminLoginApi,
  adminSignupApi,
  confirmAdminEmailApi,
} from "./apiService";

const initialState = {
  accessToken: undefined,
  admin: undefined,
  usersList: [],
  isLoading: false,
  isSuccess: false,
};
//POST
export const adminLogin = createAsyncThunk(
  "Admin/Login",
  async (Username, thunkAPI) => {
    try {
      const result = await adminLoginApi(Username);
      const { token, admin } = result.data.data;
      Cookies.set(
        "userInfo",
        JSON.stringify({ accessToken: token, admin: admin }),
        { expires: 0.5 }
      );

      thunkAPI.dispatch(userLoggedIn({ accessToken: token, admin: admin }));
      return result?.status;
    } catch (error) {
      throw error;
    }
  }
);
export const adminSignup = createAsyncThunk(
  "Admin/Signup",
  async (Username, thunkAPI) => {
    try {
      const result = await adminSignupApi(Username);
      return result;
    } catch (error) {
      throw error;
    }
  }
);
//POST
export const confirmAdminEmail = createAsyncThunk(
  "Admin/SignupEmailVerify",
  async (token, thunkAPI) => {
    try {
      const result = await confirmAdminEmailApi(token);
      return result?.response;
    } catch (error) {
      throw error;
    }
  }
);
//get
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.user = payload.user;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
      Cookies.remove("userInfo");
    },
    allUserDetails: (state, action) => {
      state.usersList = action.payload.usersList;
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
      });
  },
});

export const { userLoggedIn, userLoggedOut, allUserDetails } =
  authSlice.actions;

export const selectAccessToken = (state) => state.auth.accessToken;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
