import React from "react";
import { ToastComponent } from "../../utils/toast";
import useAuthCheck from "../../hooks/use-auth-check";
import Loader from "../../component/loader/loader";
function Layout({ children }) {
  const authChecked = useAuthCheck();
  console.log('children home',children)
  return !authChecked ? (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Loader spinner="fade" loading={!authChecked} />
    </div>
  ) : (
    <>
      <ToastComponent />{" "}
      <section className="crancy-adashboard crancy-show">
        <div className="container">
          <div className="row">{children}</div>
        </div>
      </section>
    </>
  );
}

export default Layout;
