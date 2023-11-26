import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useLoginUserMutation } from "../../redux/features/auth/authApi";
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
  const [loginUser, {}] = useLoginUserMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      loginUser({
        email: values.email,
        password: values.password,
      }).then((data) => {
        if (data?.status === "success") {
          console.log("Login successfully", data);
          // notifySuccess("Login successfully");
          // router.push(redirect || "/");
        } else {
          // notifyError(data?.error?.data?.error);
          console.log("Login successfully", data);
        }
      });
      formik.reset();
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
            <div style={styles.error}>{formik.errors.email}</div>
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
          {formik.touched.password && formik.errors.password ? (
            <div style={styles.error}>{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <button style={styles.button} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
