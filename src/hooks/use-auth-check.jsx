import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { userLoggedIn, userLoggedOut } from "../redux/features/authReducers";
import { selectAccessToken, selectUser } from "../redux/features/authReducers";
import { fetchAdminUserById } from "../redux/features/authActions";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  const user = useSelector(selectUser);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = Cookies.get("userInfo");
    const localData = localStorage.getItem("UID");
    if (localAuth) {
      const { accessToken, loggedinUser } = JSON.parse(localAuth);
      if (accessToken && loggedinUser) {
        dispatch(fetchAdminUserById(loggedinUser));
      }
    } else if (localData) {
      const auth = JSON.parse(localData);
      if (auth) {
        dispatch(fetchAdminUserById(auth));
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
