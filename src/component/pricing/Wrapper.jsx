import React from "react";

function Wrapper({ children }) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="crancy-body">
          <div className="crancy-dsinner">
            <div className="crancy-page-inner crancy-pricing mg-top-30">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
