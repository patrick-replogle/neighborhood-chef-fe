import React from "react";
import { Formik, Form } from "formik";
import AuthFields from "./AuthFields.js";
import ProfileFields from "./ProfileFields.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { MobileStepper } from "@material-ui/core";
import { formStyles } from "../../styles";

const Register = () => {
  const currentPage = useSelector((state) => state.page);
  const classes = formStyles();

  return (
    <div className={classes.registerComponent}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Required";
          }

          if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Passwords do not match";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={classes.registerForm}>
            <h1>Sign up below</h1>
            {currentPage === 1 && <AuthFields />}
            {currentPage === 2 && <ProfileFields submitting={isSubmitting} />}
          </Form>
        )}
      </Formik>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="loginLink">
          Login
        </Link>
        .
      </p>
      <MobileStepper
        variant="dots"
        steps={2}
        position="static"
        activeStep={currentPage - 1}
        className="steps"
      />
    </div>
  );
};

export default Register;