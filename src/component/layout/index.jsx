import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../menu";
import Header from "../header";
import { ToastComponent } from "../../utils/toast";

function Layout({ children }) {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    if (menu) {
      document
        .getElementsByClassName("crancy-adashboard")[0]
        .classList.add("crancy-close");
    } else {
      document
        .getElementsByClassName("crancy-adashboard")[0]
        .classList.remove("crancy-close");
    }
  }, [menu]);

  return (
    <>
      <ToastComponent />
      <div id="crancy-dark-light">
        <div className="crancy-body-area ">
          <Menu toggleMenu={toggleMenu} menu={menu} />
          <Header toggleMenu={toggleMenu} menu={menu} />

          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
