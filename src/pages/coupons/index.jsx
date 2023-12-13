import React, { useEffect, useState } from "react";
import Layout from "../../component/home-two/Layout";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Sidebar from "../../component/home/Sidebar";
import useMenu from "../../hooks/useMenu";
import ProductsList from "../../component/products/ProductsList";
import { fetchAllProducts } from "../../redux/features/authActions";
import { useDispatch, useSelector } from "react-redux";
import CouponList from "../../component/coupon/CouponList";

const Coupons = () => {
  useMenu();
  const [defaultProduct, setDefaultProduct] = useState([]);
  const products = useSelector((state) => state.auth.productList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  useEffect(() => {
    setDefaultProduct(products);
  }, [products]);
  return (
    <Layout>
      <BreadCrumb title="Coupons" link="/coupons" />
      <div className="row">
        <CouponList products={defaultProduct} />
      </div>
    </Layout>
  );
};

export default Coupons;