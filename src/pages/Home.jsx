import React, { useEffect, useState } from "react";
import { fetchPosts } from "../redux/slices/posts";
import { useDispatch, useSelector } from "react-redux";
import CreatePosts from "../components/forms/CreatePosts";

import axios from "../utils/axios/axios";
import Post from "../components/post/Post";
import PostData from "../components/post/PostData";
import { fetchUserById, fetchUsers } from "../redux/slices/user";
import { fetchAuthMe } from "../redux/slices/auth";

const Home = () => {
  const [lardi, setLardi] = useState([]);
  const [active, setActive] = useState(false);
  const getCargos = async () => {
    try {
      const { data } = await axios.get("/lardi/cargo");
      setLardi(data);
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  useEffect(() => {
    // fetchAuthMe();
  }, [lardi]);

  return (
    <div className="home container">
      <CreatePosts />
      <PostData />
    </div>
  );
};

export default Home;
