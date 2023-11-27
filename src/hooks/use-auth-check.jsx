import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { userLoggedIn, userLoggedOut } from "../redux/features/auth/authSlice";
import { selectAccessToken, selectUser } from "../redux/features/auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  const user = useSelector(selectUser);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = Cookies.get("userInfo");

    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.user) {
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            loggedinUser: auth.loggedinUser,
          })
        );
      }
    } else {
      // If there is no localAuth, dispatch userLoggedOut
      dispatch(userLoggedOut());
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
