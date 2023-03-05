import React, { useState } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import { Audio } from "react-loader-spinner";
const PostData = () => {
  const [search, setSearch] = useState("");
  const { posts } = useSelector((state) => state.posts);
  const userData = useSelector((state) => state.auth.data);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(10);
  // const lastPostIndex = currentPage * postsPerPage;
  // const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts = posts.items.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="posts">
      <h3>Пошук</h3>
      <input
        style={{ width: "200px" }}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder={"Введіть щось для пошуку"}
      />
      {posts.status !== "loaded" ? (
        <div className="loader">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="rgb(58, 169, 233)"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <>
          {posts.items
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.cityFrom.toLowerCase().includes(search) ||
                    item.cityTo.toLowerCase().includes(search) ||
                    item.driver.toLowerCase().includes(search) ||
                    item.car.toLowerCase().includes(search) ||
                    item.carOwner.toLowerCase().includes(search) ||
                    item.cargoOwner.toLowerCase().includes(search) ||
                    item.money.toLowerCase().includes(search) ||
                    item.price.toLowerCase().includes(search) ||
                    item.date.toLowerCase().includes(search) ||
                    item.cityFrom.toUpperCase().includes(search) ||
                    item.cityTo.toUpperCase().includes(search) ||
                    item.driver.toUpperCase().includes(search) ||
                    item.car.toUpperCase().includes(search) ||
                    item.carOwner.toUpperCase().includes(search) ||
                    item.cargoOwner.toUpperCase().includes(search) ||
                    item.money.toUpperCase().includes(search) ||
                    item.price.toUpperCase().includes(search) ||
                    item.date.toUpperCase().includes(search);
            })
            .map((item) => (
              <Post key={item._id} obj={item} userData={userData} />
            ))
            .reverse()}
        </>
      )}
    </div>
  );
};

export default PostData;
