import React, { useEffect } from "react";
import Layout from "../../component/home-two/Layout";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Wrapper from "../../component/settings/Wrapper";
import Sidebar from "../../component/settings/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "../../redux/features/authReducers";
import Cookies from "js-cookie";
const Settings = ({ children }) => {
  useMenu();
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
    }
  }, [dispatch]);
  return (
    <Layout>
      <BreadCrumb title="Settings" link="/settings" />
      <Wrapper>
        <div className="row">
          <Sidebar />
          <div className="col-lg-9 col-md-10 col-12  crancy-personals__content mg-top-30">
            <Outlet />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Settings;
