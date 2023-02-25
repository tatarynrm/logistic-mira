import React, { useEffect } from "react";
import { fetchPosts } from "../redux/slices/posts";
import { useDispatch, useSelector } from "react-redux";
import CreatePosts from "../components/forms/CreatePosts";

import axios from "../utils/axios/axios";
import Post from "../components/post/Post";
import PostData from "../components/post/PostData";
import { fetchUserById, fetchUsers } from "../redux/slices/user";
import { fetchAuthMe } from "../redux/slices/auth";
const Home = () => {
  const getCargos = async () => {
    const { data } = await axios.get("/lardi/cargo");
    console.log(data);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  useEffect(() => {
    getCargos();
    fetchAuthMe();
  }, []);
  return (
    <div className="home container">
      <CreatePosts />
      <PostData />
    </div>
  );
};

export default Home;
