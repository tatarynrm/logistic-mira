import React, { useEffect } from "react";
import { fetchPosts } from "../redux/slices/posts";
import { useDispatch, useSelector } from "react-redux";
import CreatePosts from "../components/forms/CreatePosts";

import axios from "../utils/axios/axios";
import Post from "../components/post/Post";
import PostData from "../components/post/PostData";
import { fetchUserById, fetchUsers } from "../redux/slices/user";
const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.users);
  const isPostsLoading = posts.status === "loading";
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="home container">
      <CreatePosts />
      <PostData />
    </div>
  );
};

export default Home;
