import React from "react";
import Layout from "../../component/home-two/Layout";
import BreadCrumb from "../../component/home-two/BreadCrumb";
import Sidebar from "../../component/home/Sidebar";
import useMenu from "../../hooks/useMenu";
import ProductsList from "../../component/products/ProductsList";
import { fetchAllProducts } from "../../redux/features/auth/authSlice";

const Products = () => {
  useMenu();

  const user = useSelector((state) => state.auth.loggedinUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchAllProducts()
    );
  }, [dispatch]);
  return (
    <Layout>
      <BreadCrumb title="Products" link="/products" />
      <div className="row">
        <ProductsList />
      </div>
    </Layout>
  );
};

export default Products;
