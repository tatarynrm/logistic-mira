import React, { useEffect } from "react";
import Button from "../buttons/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import "./Post.scss";
import axios from "../../utils/axios/axios";
import { fetchPosts } from "../../redux/slices/posts";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "../../redux/slices/auth";
import { fetchUserById } from "../../redux/slices/user";
const Post = ({ obj, isOwner }) => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const deletePost = async (id) => {
    if (window.confirm("Ви точно хочете видалити ?")) {
      const { data } = await axios.delete(`/notes/${id}`);
      dispatch(fetchPosts());
    }
  };

  return (
    <div className="post">
      {obj.note !== "" ? (
        <i
          // onClick={}
          className="post__note edit__button"
        >
          <AiFillEye />
        </i>
      ) : null}
      <div>{obj.date}</div>
      <div>{obj.cityFrom.toUpperCase()}</div>
      <div>{obj.cityTo.toUpperCase()}</div>
      <div>{obj.price.toUpperCase()}</div>
      <div>{obj.money.toUpperCase()}</div>
      <div>{obj.cargoOwner.toUpperCase()}</div>
      <div>{obj.driver.toUpperCase()}</div>
      <div>{obj.car.toUpperCase()}</div>
      <div>{obj.carOwner.toUpperCase()}</div>
      {isOwner._id === obj.user._id ? (
        <div className="post__edit_buttons">
          <div>
            <i
              style={{ fontSize: "30px", color: "rgb(58, 169, 233)" }}
              className="edit__button edit_btn"
            >
              <MdModeEditOutline />
            </i>
          </div>
          <div>
            <i
              onClick={() => deletePost(obj._id)}
              style={{ fontSize: "30px", color: "rgb(174, 71, 56)" }}
              className="edit__button delete_btn"
            >
              <RiDeleteBinLine />
            </i>
          </div>
        </div>
      ) : (
        <div className="user__circle">
          {obj.user.firstName}.{obj.user.lastName.charAt(0)}
        </div>
      )}
    </div>
  );
};

export default Post;
