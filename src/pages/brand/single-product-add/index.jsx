import React, { useEffect, useState } from "react";
import Layout from "../../../component/home-two/Layout";
import BreadCrumb from "../../../component/home-two/BreadCrumb";
import Sidebar from "../../../component/home/Sidebar";
import useMenu from "../../../hooks/useMenu";
import SingleProductAddForm from "../../../component/products/SingleProductAdd";

const SingleProductAdd = () => {
  useMenu();

  return (
    <Layout>
      <BreadCrumb title="Add Single Product" link="/products" />
      <div className="row">
        <SingleProductAddForm />
      </div>
    </Layout>
  );
};

export default SingleProductAdd;
