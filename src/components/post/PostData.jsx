import React from "react";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
const PostData = () => {
  const { posts } = useSelector((state) => state.posts);

  const columns = [
    {
      name: "Дата",
      selector: (row) => row.date,
    },
    {
      name: "Завантаження",
      selector: (row) => row.cityFrom,
    },
    {
      name: "Вигрузка",
      selector: (row) => row.cityFrom,
    },
    {
      name: "Ціна перевезення",
      selector: (row) => row.cityFrom,
    },
    {
      name: "Маржа",
      selector: (row) => row.cityFrom,
    },
    {
      name: "Замовник",
      selector: (row) => row.cityFrom,
    },
    {
      name: "Водій",
      selector: (row) => row.cityFrom,
    },
    {
      name: "Автомобіль",
      selector: (row) => row.cityFrom,
    },
    {
      name: "Власник авто",
      selector: (row) => row.cityFrom,
    },
  ];
  return (
    <div className="posts">
      {posts.status !== "loaded" ? (
        <>
          <p>ok</p>
        </>
      ) : (
        <>
          {posts.items
            .map((item) => <Post key={item._id} obj={item} />)
            .reverse()}
        </>
      )}
    </div>
  );
};

export default PostData;
