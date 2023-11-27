import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { adminLoginApi,adminSignupApi } from "./apiService";

const initialState = {
  accessToken: undefined,
  user: undefined,
  usersList: [],
};

export const adminLogin = createAsyncThunk(
  "Admin/Login",
  async (Username, thunkAPI) => {
    try {
      const result = await adminLoginApi(Username);
      const { token, admin } = result.data.data;
      Cookies.set(
        "userInfo",
        JSON.stringify({ accessToken: token, user: admin }),
        { expires: 0.5 }
      );

      thunkAPI.dispatch(userLoggedIn({ accessToken: token, user: admin }));
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
});

export const { userLoggedIn, userLoggedOut, allUserDetails } =
  authSlice.actions;

export const selectAccessToken = (state) => state.auth.accessToken;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
//   // extraReducers: (builder) => {
//   //   builder
//   //     .addCase(fetchUserLogin.pending, (state) => {
//   //       state.pageLoading = true;
//   //     })
//   //     .addCase(fetchUserLogin.fulfilled, (state, action) => {
//   //       state.pageLoading = false;
//   //       state.questionsInPage = action.payload;
//   //       state.pageError = null;
//   //     })
//   //     .addCase(fetchUserLogin.rejected, (state, action) => {
//   //       state.pageLoading = false;
//   //       state.pageError = action.error.message;
//   //     });
//   // },
// });