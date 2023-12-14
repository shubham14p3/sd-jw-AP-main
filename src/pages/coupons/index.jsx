import React, { useEffect, useState } from "react";
import Layout from "../../component/home-two/Layout";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Sidebar from "../../component/home/Sidebar";
import useMenu from "../../hooks/useMenu";
import ProductsList from "../../component/products/ProductsList";
import { fetchAllCoupons } from "../../redux/features/authActions";
import { useDispatch, useSelector } from "react-redux";
import CouponList from "../../component/coupon/CouponList";

const Coupons = () => {
  useMenu();
  const [defaultProduct, setDefaultProduct] = useState([]);
  const coupons = useSelector((state) => state.auth.couponsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCoupons());
  }, [dispatch]);
  useEffect(() => {
    setDefaultProduct(coupons);
  }, [coupons]);
  return (
    <Layout>
      <BreadCrumb title="Coupons" link="/coupons" />
      <div className="row">
        <CouponList coupons={defaultProduct} />
      </div>
    </Layout>
  );
};

export default Coupons;