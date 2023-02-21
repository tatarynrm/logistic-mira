import React from "react";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
const PostData = () => {
  const { posts } = useSelector((state) => state.posts);
  const userData = useSelector((state) => state.auth.data);
  return (
    <div className="posts">
      {posts.status !== "loaded" ? (
        <>
          <p>ok</p>
        </>
      ) : (
        <>
          {posts.items
            .map((item) => (
              <Post key={item._id} obj={item} isOwner={userData} />
            ))
            .reverse()}
        </>
      )}
    </div>
  );
};

export default PostData;
