import React, { useEffect } from "react";
import Layout from "../../component/home-two/Layout";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Wrapper from "../../component/settings/Wrapper";
import Sidebar from "../../component/settings/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { fetchAdminUserById } from "../../redux/features/authActions";
const Settings = ({ children }) => {
  useMenu();
  const user = useSelector((state) => state.auth.loggedinUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
