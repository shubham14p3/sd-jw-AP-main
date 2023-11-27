import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMsg from "../../component/common/error-msg";
import { notifyError, notifySuccess } from "../../utils/toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { adminLogin } from "../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
const styles = {
  error: {
    color: "red",
    marginBottom: "8px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  input: {
    padding: "10px",
    marginBottom: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  },
  header: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const data = await dispatch(
          adminLogin({
            email: values.email,
            password: values.password,
          })
        );
        if (data?.payload === 200) {
          notifySuccess("Login successfully");
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        } else {
          notifyError("Unable to Login. Try Again");
        }
      } catch (error) {
        notifyError("An error occurred during login. Please try again.");
      }
    },
  });

  return (
    <div>
      <h2 style={styles.header}>Agent Login Form</h2>
      <br />
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            style={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMsg msg={formik.errors.email} />
          ) : null}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            style={styles.input}
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {/* <span className="open-eye" onClick={() => setShowPass(!showPass)}>
            {showPass ? (
              <FontAwesomeIcon icon="fa-solid fa-eye" />
            ) : (
              <FontAwesomeIcon icon="fa-regular fa-eye" />
            )}
          </span> */}
          {formik.touched.password && formik.errors.password ? (
            <ErrorMsg msg={formik.errors.password} />
          ) : null}
        </div>

        <br />
        <div>
          <button style={styles.button} type="submit">
            Login
          </button>
        </div>
        {/* <!-- Form Group --> */}
        <div className="form-group form-mg-top30">
          <div className="crancy-wc__bottom">
            <p className="crancy-wc__text">
              Dont have account ? <Link to="/create-account">Sign Up</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
