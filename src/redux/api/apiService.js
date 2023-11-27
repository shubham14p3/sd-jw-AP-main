import axios from "axios";
import useAuthCheck from "../../hooks/use-auth-check";
// import { LOCAL_STORAGE_KEYS } from "./constants.js";

// const handleErrorResponse = async (err) => (err?.response ? err?.response : err);

const logoutUser = async () => {
  localStorage.clear();
  window.location.reload();
};
const handleErrorResponseForToken = async (err) => {
  if (err.response) {
    if (err.response.status === 401) {
      //Add a toast or error display mechanism and logout
    }
  } else {
    return err;
  }
};
const handleErrorResponse = async (err) => {
  if (err.response) {
    if (err.response.status === 401) {
      //Add a toast or error display mechanism and logout
      logoutUser();
    }
  } else {
    return err;
  }
};

const handleSuccessResponse = (res) => res;

const headersTokenObj = {
  "Content-Type": "application/x-www-form-urlencoded",
  "Access-Control-Allow-Origin": "*",
};

const headersObj = {
  "Content-Type": "application/json",
};

const returnTokenWithBearer = (token) => `Bearer ${token}`;

// get method

export const getData = (url, params = {}) => {
  // localStorage.setItem(
  //   useAuthCheck,
  //   "eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWUiOiJEZWVwYWsiLCJsYXN0TmFtZSI6Ikt1bWFyIiwidXNlcklkIjoiNjc5OSIsImVtYWlsIjoiZGtAYWJjLmNvbSIsInN1YiI6ImRrMTIzIiwiaWF0IjoxNjkyNjA4Njc2LCJleHAiOjE2OTI2OTUwNzd9.-IUJf2cnq1PBnj-4b3CYYKiHOLPmVE-Y5S8nu-JRofo"
  // );
  //Faltu kaheader chweck need to mrove
  // headersObj.Authorization = returnTokenWithBearer(
  //   localStorage.getItem(useAuthCheckeAuthCheck)
  // );
  const additionalHeaders = {
    "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  };

  const headers = {
    // ...headersObj,
    ...additionalHeaders,
  };
  return axios
    .get(url, {
      headers: headers,
    })
    .then((res) => handleSuccessResponse(res))
    .catch((err) => {
      handleErrorResponse(err, { type: "GET", url });
      return err;
    });
};

// post method

export const postData = (url, body, isLogin = false) => {
  headersObj.Authorization = returnTokenWithBearer(
    localStorage.getItem(useAuthCheck)
  );

  return axios
    .post(url, body, {
      headers: headersObj,
    })
    .then((res) => handleSuccessResponse(res))
    .catch((err) => handleErrorResponse(err), { type: "POST", url, body });
};

export const postDataWithOutAuth = (url, body, isLogin = false) => {
  headersObj.Authorization = returnTokenWithBearer(
    localStorage.getItem(useAuthCheck)
  );

  return axios
    .post(url, body)
    .then((res) => handleSuccessResponse(res))
    .catch((err) => handleErrorResponse(err), { type: "POST", url, body });
};

export const deleteData = (url, body, isLogin = false) => {
  headersObj.Authorization = returnTokenWithBearer(
    localStorage.getItem(useAuthCheck)
  );

  return axios
    .post(url, body, {
      headers: headersObj,
    })
    .then((res) => handleSuccessResponse(res))
    .catch((err) => handleErrorResponse(err), { type: "POST", url, body });
};

export const putData = (url, body, isLogin = false) => {
  headersObj.Authorization = returnTokenWithBearer(
    localStorage.getItem(useAuthCheck)
  );

  return axios
    .put(url, body, {
      headers: headersObj,
    })
    .then((res) => handleSuccessResponse(res))
    .catch((err) => handleErrorResponse(err), { type: "PUT", url, body });
};

export const postTokenData = (url, body, isLogin = false) => {
  // headersTokenObj.Authorization = returnTokenWithBearer(localStorage.getItem(useAuthCheck));
  const head = "";
  return axios
    .post(url, body, {
      headers: headersTokenObj,
    })
    .then((res) => handleSuccessResponse(res))
    .catch((err) => handleErrorResponseForToken(err), {
      type: "POST",
      url,
      body,
    });
};

export const deleteMethod = (url, body, isLogin = false) => {
  headersObj.Authorization = returnTokenWithBearer(
    localStorage.getItem(useAuthCheck)
  );

  return axios
    .delete(url, {
      headers: headersObj,
      data: body,
    })
    .then((res) => handleSuccessResponse(res))
    .catch((err) => handleErrorResponse(err), { type: "DELETE", url, body });
};
