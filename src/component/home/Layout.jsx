import React from "react";
import { ToastComponent } from "../../utils/toast";
function Layout({ children }) {
  return (
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
