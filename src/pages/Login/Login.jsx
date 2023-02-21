import React, { useEffect, useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import LoginForm from "../../components/forms/LoginForm";
const Login = () => {
  return (
    <div className="container">
      <LoginForm />
    </div>
  );
};

export default Login;
