import React, { useState } from "react";
import "./LoginForm.scss";
import { Formik, Field, Form } from "formik";
import Button from "../buttons/Button";
import { loginSchema } from "../../utils/validations/formValidations";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";
const LoginForm = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  console.log(isAuth);
  const [val, setVal] = useState({
    email: "",
    password: "",
  });
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className="login">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={async (values, { resetForm }) => {
          // dispatch(fetchAuth(values));
          const data = await dispatch(fetchAuth(values));
          if (!data.payload) {
            return alert("Не вдалось авторизуватись");
          }

          if ("token" in data.payload) {
            window.localStorage.setItem("token", data.payload.token);
            function setTokenDelete() {
              setTimeout(() => {
                window.localStorage.removeItem("token");
              }, 7200000);
            }
            setTokenDelete();
          }
        }}
      >
        {({ errors, touched, isValid }) => (
          <Form className="login__form">
            <div className="login__group">
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="text" />
              {errors.email && touched.email ? (
                <div className="login__error">{errors.email}</div>
              ) : null}
            </div>
            <div className="login__group">
              <label htmlFor="firstName">Пароль</label>
              <Field type="password" id="password" name="password" />
              {errors.password && touched.password ? (
                <div className="login__error">{errors.password}</div>
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

export default LoginForm;
