import React, { useState } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
const PostData = () => {
  const [search, setSearch] = useState("");
  const { posts } = useSelector((state) => state.posts);

  console.log(search);
  const userData = useSelector((state) => state.auth.data);
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
        <>
          <p>Loading ...</p>
        </>
      ) : (
        <>
          {posts?.items
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
                    item.date.toLowerCase().includes(search);
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
