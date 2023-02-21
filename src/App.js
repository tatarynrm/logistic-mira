import { useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "./utils/axios/axios";
import Header from "./components/header/Header";
import EditPost from "./pages/EditPost/EditPost";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import PrivateRoute from "./PrivateRoute";
import DoesntExit from "./pages/DoesntExit";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  console.log(isAuth);
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/notes/:id" element={<EditPost />} />
        </Route>
        <Route path="*" exact={true} element={<DoesntExit />} />
      </Routes>
    </>
  );
}

export default App;