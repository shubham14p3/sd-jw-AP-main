import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Menu from "../menu";
import Header from "../header";
import { ToastComponent } from "../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { userLoggedIn } from "../../redux/features/auth/authSlice";
function Layout({ children }) {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const user = useSelector((state) => state.auth.loggedinUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const localAuth = Cookies.get("userInfo");
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.loggedinUser) {
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            loggedinUser: auth.loggedinUser,
          })
        );
      }
    } else {
      navigate("/");
    }
  }, [dispatch]);
  useEffect(() => {
    if (menu) {
      document
        .getElementsByClassName("crancy-adashboard")[0]
        ?.classList.add("crancy-close");
    } else {
      document
        .getElementsByClassName("crancy-adashboard")[0]
        ?.classList.remove("crancy-close");
    }
  }, [menu]);

  return (
    <>
      <ToastComponent />
      <div id="crancy-dark-light">
        <div className="crancy-body-area ">
          <Menu toggleMenu={toggleMenu} menu={menu} />
          <Header toggleMenu={toggleMenu} menu={menu} />

          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
