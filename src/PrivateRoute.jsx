// PrivateRoute.js
import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, Routes } from "react-router-dom";
import { selectAccessToken } from "./redux/features/auth/authSlice";

const PrivateRoute = ({ path, element }) => {
  const accessToken = useSelector(selectAccessToken);

  // If accessToken exists, render the component, else redirect to login
  return (
    <Routes>
      {accessToken ? (
        <Route path={path} element={element} />
      ) : (
        <Route path={path} element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
};

export default PrivateRoute;
