import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import googleLogo from "../../assets/img/google-logo.png";
import appleLogo from "../../assets/img/apple-logo.png";
import ErrorMsg from "../../component/common/error-msg";
import { notifyError, notifySuccess } from "../../utils/toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminSignup } from "../../redux/features/authActions";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("First name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

function SignUpForm() {
  const [showPass, setShowPass] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleSignUp = async () => {
    // Handle Google sign-up logic
  };

  const handleAppleSignUp = async () => {
    // Handle Apple sign-up logic
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      checkbox: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const data = await dispatch(
          adminSignup({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            role: "Super Admin",
            mobileNo: "",
            faxNo: "",
            gender: "",
            country: "",
            facebook: "",
            youtube: "",
            twitter: "",
            pinterest: "",
            linkedin: "",
            instagram: "",
          })
        );
        if (data?.payload?.status !== 200) {
          notifyError("Register Failed");
        } else {
          notifySuccess(data?.payload?.data?.message);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } catch (error) {
        console.error("Error in onSubmit:", error);
      }
    },
  });

  return (
    <>
      <div className="crancy-wc__heading">
        <h3 className="crancy-wc__form-title crancy-wc__form-title__one">
          Create your account
        </h3>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="form-group">
            <div className="form-group__input">
              <input
                className="crancy-wc__form-input"
                type="name"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                required="required"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            {formik.touched.name && formik.errors.name ? (
              <ErrorMsg msg={formik.errors.name} />
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <div className="form-group__input">
              <input
                className="crancy-wc__form-input"
                type="name"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                required="required"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </div>
            {formik.touched.name && formik.errors.name ? (
              <ErrorMsg msg={formik.errors.name} />
            ) : null}
          </div>
        </div>
        <div className="form-group">
          <div className="form-group__input">
            <input
              className="crancy-wc__form-input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required="required"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <ErrorMsg msg={formik.errors.email} />
          ) : null}
        </div>
        <div className="form-group">
          <div className="form-group__input">
            <input
              className="crancy-wc__form-input"
              placeholder="Password"
              id="password"
              type={showPass ? "text" : "password"}
              name="password"
              required="required"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <span
              className="crancy-wc__toggle"
              onClick={() => setShowPass(!showPass)}
            >
              <i className="fas fa-eye" id="toggle-icon"></i>
            </span>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <ErrorMsg msg={formik.errors.password} />
          ) : null}
        </div>
        <div className="form-group">
          <div className="crancy-wc__check-inline">
            <div className="crancy-wc__checkbox">
              <input
                className="crancy-wc__form-check"
                id="checkbox"
                name="checkbox"
                type="checkbox"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.checkbox}
              />
              <label htmlFor="checkbox">
                By proceeding, you agree to the{" "}
                <a href="#">Terms and Conditions</a>
              </label>
            </div>
            {formik.touched.checkbox && formik.errors.checkbox ? (
              <ErrorMsg msg={formik.errors.checkbox} />
            ) : null}
          </div>
        </div>
        <br />
        <div className="form-group form-mg-top25">
          <div className="crancy-wc__button">
            <button className="ntfmax-wc__btn" type="submit">
              Sign up with email
            </button>
          </div>
          <div className="crancy-wc__form-login--label">
            <span>Or sign up with</span>
          </div>
          <div className="crancy-wc__button--group">
            <button
              className="ntfmax-wc__btn ntfmax-wc__btn--two"
              type="button"
              onClick={handleGoogleSignUp}
            >
              <div className="ntfmax-wc__btn-icon">
                <img src={googleLogo} alt="Google" />
              </div>
              Google
            </button>
            <button
              className="ntfmax-wc__btn ntfmax-wc__btn--two"
              type="button"
              onClick={handleAppleSignUp}
            >
              <div className="ntfmax-wc__btn-icon">
                <img src={appleLogo} alt="Apple" />
              </div>
              Apple
            </button>
          </div>
        </div>
        <div className="form-group form-mg-top30">
          <div className="crancy-wc__bottom">
            <p className="crancy-wc__text">
              Already have an account ? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;
