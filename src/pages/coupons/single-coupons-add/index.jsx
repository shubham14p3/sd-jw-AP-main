import React, { useEffect, useState } from "react";
import Layout from "../../../component/home-two/Layout";
import BreadCrumb from "../../../component/home-two/BreadCrumb";
import Sidebar from "../../../component/home/Sidebar";
import useMenu from "../../../hooks/useMenu";
import SingleCouponAddForm from "../../../component/coupon/SingleCouponAdd";

const SingleCouponAdd = () => {
  useMenu();

  return (
    <Layout>
      <BreadCrumb title="Add Single Coupon" link="/coupons" />
      <div className="row">
        <SingleCouponAddForm />
      </div>
    </Layout>
  );
};

export default SingleCouponAdd;
