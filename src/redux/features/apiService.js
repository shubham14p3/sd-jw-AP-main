import * as apiService from "../api/apiService";
const NEXT_PUBLIC_API_BASE_URL = import.meta.env.VITE_DB_HOST;
//Admin Api
export const adminLoginApi = async (payload) =>
  apiService.postData(`${NEXT_PUBLIC_API_BASE_URL}/admin/login`, payload);
export const adminSignupApi = async (payload) =>
  apiService.postData(`${NEXT_PUBLIC_API_BASE_URL}/admin/register`, payload);

export const fetchAllUserApi = async (token) =>
  apiService.getData(`${NEXT_PUBLIC_API_BASE_URL}/user/all`);
export const fetchAdminUserByIdApi = async (id) =>
  apiService.getData(
    `${NEXT_PUBLIC_API_BASE_URL}/admin/getAdminUserById/${id}`
  );
export const updateAdminUserByIdApi = async (id, data) =>
  apiService.patchData(
    `${NEXT_PUBLIC_API_BASE_URL}/admin/update-admin-staff/${id}`,
    data
  );

// fetchAllUserEmailApi
export const confirmAdminEmailApi = async (token) =>
  apiService.getData(`${NEXT_PUBLIC_API_BASE_URL}/admin/confirmEmail/${token}`);
export const fetchAllUserEmailApi = async () =>
  apiService.getData(`${NEXT_PUBLIC_API_BASE_URL}/email/email-details`);
//Upload Api
export const uploadAdminProfileImageApi = async (payload, id) =>
  apiService.postDataImg(
    `${NEXT_PUBLIC_API_BASE_URL}/cloudinary/add-admin-profile-img/${id}`,
    payload
  );
export const uploadAdminProfileCoverImageApi = async (payload, id) =>
  apiService.postDataImg(
    `${NEXT_PUBLIC_API_BASE_URL}/cloudinary/add-admin-profile-cover-img/${id}`,
    payload
  );
//Product Api
export const createSingleProductApi = async (payload) =>
  apiService.postData(`${NEXT_PUBLIC_API_BASE_URL}/product/add`, payload);
export const fetchAllProductsApi = async () =>
  apiService.getData(`${NEXT_PUBLIC_API_BASE_URL}/product/all`);
//Coupons
export const fetchAllCouponsApi = async () =>
  apiService.getData(`${NEXT_PUBLIC_API_BASE_URL}/coupon`)