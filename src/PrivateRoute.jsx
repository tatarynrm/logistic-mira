import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "./redux/slices/auth";
import Login from "./pages/Login/Login";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  const token = localStorage.getItem("token");
  return isAuth ? <Outlet /> : <Login />;
};

export default PrivateRoute;
