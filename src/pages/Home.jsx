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
  const userData = useSelector((state) => state.auth.data);
  const [lardi, setLardi] = useState([]);
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

      {userData?.email === "tmv@gmail.com" ? (
        <>
          <button onClick={getCargos}>LARDI</button>

          {lardi !== []
            ? lardi.map((item) => (
                <div className="lardi__cargo" key={item.id}>
                  <div> {item.waypointListSource[0].town.name}</div>
                  <div> {item.waypointListTarget[0].town.name}</div>
                  <div className="payment">
                    {" "}
                    {item.payment.price
                      ? `${item.payment.price} грн`
                      : "Ціну не вказано"}
                  </div>
                  <div> {item.id}</div>
                </div>
              ))
            : null}
        </>
      ) : null}
    </div>
  );
};

export default Home;
