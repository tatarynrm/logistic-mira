import React from "react";
import "./RegisterForm.scss";
import { useState } from "react";
import "./LoginForm.scss";
import { Formik, Field, Form } from "formik";
import Button from "../buttons/Button";
import {
  loginSchema,
  registerSchema,
} from "../../utils/validations/formValidations";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAuth,
  fetchRegister,
  selectIsAuth,
} from "../../redux/slices/auth";
const RegisterForm = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className="register">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={registerSchema}
        onSubmit={async (values, { resetForm }) => {
          const data = await dispatch(fetchRegister(values));
          if ("token" in data.payload) {
            window.localStorage.setItem("token", data.payload.token);
          }
        }}
      >
        {({ errors, touched, isValid }) => (
          <Form className="register__form">
            <div className="register__group">
              <label htmlFor="firstName">Ім'я</label>
              <Field type="text" id="firstName" name="firstName" />
              {errors.firstName && touched.firstName ? (
                <div className="register__error">{errors.firstName}</div>
              ) : null}
            </div>
            <div className="register__group">
              <label htmlFor="firstName">Прізвище</label>
              <Field type="text" id="lastName" name="lastName" />
              {errors.firstName && touched.firstName ? (
                <div className="register__error">{errors.firstName}</div>
              ) : null}
            </div>
            <div className="register__group">
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="text" />
              {errors.email && touched.email ? (
                <div className="register__error">{errors.email}</div>
              ) : null}
            </div>
            <div className="register__group">
              <label htmlFor="firstName">Пароль</label>
              <Field type="password" id="password" name="password" />
              {errors.password && touched.password ? (
                <div className="register__error">{errors.password}</div>
              ) : null}
            </div>
            <button disabled={!isValid} type="submit" className="normal">
              Увійти
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
