import { createAsyncThunk } from "@reduxjs/toolkit";
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
  uploadAdminProfileCoverImageApi,
  fetchAllUserEmailApi,
  createSingleProductApi,
} from "./apiService";
import {
  userLoggedIn,
  userLoggedOut,
  fetchAllUserDetails,
  fetchAllProductsDetails,
  fetchUserEmailSuccess,
} from "./authReducers";

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
      localStorage.setItem("UID", JSON.stringify(admin._id));
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
          userLoggedIn({
            accessToken: result.data.token,
            loggedinUser: result.data.data,
          })
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
          userLoggedIn({
            accessToken: result.data.token,
            loggedinUser: result.data.data,
          })
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
      const { token, admin } = result.data;
      thunkAPI.dispatch(
        userLoggedIn({ accessToken: token, loggedinUser: admin })
      );
    } catch (error) {
      throw error;
    }
  }
);

//get
export const fetchAllUserEmail = createAsyncThunk(
  "auth/fetchAllUserEmail",
  async (token, thunkAPI) => {
    try {
      const result = await fetchAllUserEmailApi();
      if (result?.status === 200) {
        thunkAPI.dispatch(fetchUserEmailSuccess({ userEmail: result.data }));
        return result?.data;
      } else {
        // If the status is not 200, treat it as an error
        const error = new Error(
          result?.message || "Failed to fetch user email"
        );
        throw error;
      }
    } catch (error) {
      // Handle any other errors here
      throw error;
    }
  }
);

//POST
export const createSingleProduct = createAsyncThunk(
  "Admin/uploadAdminProfileCoverImage",
  async (payload, thunkAPI) => {
    try {
      const result = await createSingleProductApi(payload);
      // if (result && result?.status === 200) {
      //   thunkAPI.dispatch(
      //     userLoggedIn({
      //       accessToken: result.data.token,
      //       loggedinUser: result.data.data,
      //     })
      //   );
      // }
      // return result;
      console.log("result,", result);
    } catch (error) {
      throw error;
    }
  }
);
