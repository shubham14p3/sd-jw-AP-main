import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  confirmAdminEmail,
  userLoggedIn,
} from "../../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { notifySuccess, notifyError } from "../../utils/toast";

const EmailVerification = () => {
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const isSuccess = useSelector((state) => state.auth.isSuccess);
  const [isConfirmed, setIsConfirmed] = useState(false); // Flag to track if confirmAdminEmail has been called

  const initialConfirmMailCheck = () => {
    try {
      const result = dispatch(confirmAdminEmail(token));
          if (result?.payload?.status === 200) {
        const { token, admin } = result.data.data;
        dispatch(userLoggedIn({ accessToken: token, admin: admin }));
        if (isSuccess && !isLoading) {
          setTimeout(() => {
            navigate("/home");
          }, 2000);
          notifySuccess("Register Success!");
        }
      } else if (result?.payload?.status === 403) {
        notifyError(result?.payload?.data?.error);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        console.log("else");
        notifyError("Something went wrong. Retry Again!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.error("Error in initialConfirmMailCheck:", error);
    }
  };

  useEffect(() => {
    if (token !== undefined && token !== null && !isConfirmed) {
      setIsConfirmed(true); // Set the flag to true to prevent multiple calls
      initialConfirmMailCheck();
    }
  }, []);

  return (
    <section className="crancy-EmailVerification">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        {isLoading ? <h3>Loading ....</h3> : <></>}
      </div>
      <Link to="/home" className="crancy-btn crancy-btn--error">
        Go to Home
      </Link>
    </section>
  );
};

export default EmailVerification;
