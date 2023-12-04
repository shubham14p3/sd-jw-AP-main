import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  adminLoginApi,
  adminSignupApi,
  confirmAdminEmailApi,
  fetchAllUserApi,
  fetchAdminUserByIdApi,
  fetchAllProductsApi,
  updateAdminUserByIdApi,
  uploadAdminProfileImageApi,
} from "./apiService";

const initialState = {
  accessToken: undefined,
  loggedinUser: undefined,
  usersList: [],
  productList: [],
  isLoading: false,
  isSuccess: false,
  isImagUploadedSuccess: false,
  isImageloadingSuccess: false,
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
        JSON.stringify({ accessToken: token, loggedinUser: admin }),
        { expires: 0.5 }
      );

      thunkAPI.dispatch(
        userLoggedIn({ accessToken: token, loggedinUser: admin })
      );
      return result?.status;
    } catch (error) {
      throw error;
    }
  }
);
//POST
export const uploadAdminProfileImage = createAsyncThunk(
  "Admin/uploadAdminProfileImage",
  async ({ payload, id }, thunkAPI) => {
    try {
      const result = await uploadAdminProfileImageApi(payload, id);
      if (result && result?.status === 200) {
        thunkAPI.dispatch(
          userLoggedIn({ accessToken: result.data.token, loggedinUser: result.data.data })
        );
      }
      return result;
    } catch (error) {
      throw error;
    }
  }
);
//POST
export const uploadAdminProfileCoverImage = createAsyncThunk(
  "Admin/uploadAdminProfileCoverImage",
  async ({ payload, id }, thunkAPI) => {
    try {
      const result = await uploadAdminProfileCoverImageApi(payload, id);
      if (result && result?.status === 200) {
        thunkAPI.dispatch(
          userLoggedIn({ accessToken: result.data.token, loggedinUser: result.data.data })
        );
      }
      return result;
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
//get
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
//patch
export const updateAdminUserById = createAsyncThunk(
  "Admin/updateAdminUserById",
  async (values, thunkAPI) => {
    try {
      const result = await updateAdminUserByIdApi(values.id, values);
      if (result?.status === 200) {
        const { token, admin } = result?.data;
        Cookies.set(
          "userInfo",
          JSON.stringify({ accessToken: token, loggedinUser: admin }),
          { expires: 0.5 }
        );
        thunkAPI.dispatch(
          userLoggedIn({ accessToken: token, loggedinUser: admin })
        );
        return result?.data;
      }
    } catch (error) {
      throw error;
    }
  }
);
//get
export const fetchAllUser = createAsyncThunk(
  "Admin/fetchAllUser",
  async (token, thunkAPI) => {
    try {
      const result = await fetchAllUserApi();
      const { data } = result.data;
      thunkAPI.dispatch(fetchAllUserDetails({ usersList: data }));
    } catch (error) {
      throw error;
    }
  }
);
//get
export const fetchAllProducts = createAsyncThunk(
  "Admin/fetchAllProducts",
  async (token, thunkAPI) => {
    try {
      const result = await fetchAllProductsApi();
      const { data } = result.data;
      thunkAPI.dispatch(fetchAllProductsDetails({ productList: data }));
    } catch (error) {
      throw error;
    }
  }
);
//get
export const fetchAdminUserById = createAsyncThunk(
  "Admin/fetchAdminUserById",
  async (id, thunkAPI) => {
    try {
      const result = await fetchAdminUserByIdApi(id);
      const { token, admin } = result.data.data;
      thunkAPI.dispatch(
        userLoggedIn({ accessToken: token, loggedinUser: admin })
      );
    } catch (error) {
      throw error;
    }
  }
);

//slice
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
      Cookies.remove("userInfo");
    },
    fetchAllUserDetails: (state, action) => {
      state.usersList = action.payload.usersList;
    },
    fetchAllProductsDetails: (state, action) => {
      state.productList = action.payload.productList;
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
      });
  },
});

export const {
  userLoggedIn,
  userLoggedOut,
  fetchAllUserDetails,
  fetchAllProductsDetails,
} = authSlice.actions;

export const selectAccessToken = (state) => state.auth.accessToken;
export const selectUser = (state) => state.auth.loggedinUser;

export default authSlice.reducer;
