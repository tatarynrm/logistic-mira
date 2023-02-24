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
import { fetchPosts } from "./redux/slices/posts";
import LardiTrans from "./pages/Lardi-Trans/LardiTrans";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {
    dispatch(fetchAuthMe());
    dispatch(fetchPosts());
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/notes/:id" element={<EditPost />} />
          <Route path="/lardi" element={<LardiTrans />} />
        </Route>
        <Route path="*" exact={true} element={<DoesntExit />} />
      </Routes>
    </>
  );
}

export default App;
