import React from "react";
import Button from "../buttons/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import "./Post.scss";
import axios from "../../utils/axios/axios";
import { fetchPosts } from "../../redux/slices/posts";
import { useDispatch } from "react-redux";
const Post = ({ obj }) => {
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
      <div className="post__edit_buttons">
        <i
          style={{ fontSize: "30px", color: "rgb(58, 169, 233)" }}
          className="edit__button edit_btn"
        >
          <MdModeEditOutline />
        </i>
        <i
          onClick={() => deletePost(obj._id)}
          style={{ fontSize: "30px", color: "rgb(174, 71, 56)" }}
          className="edit__button delete_btn"
        >
          <RiDeleteBinLine />
        </i>
      </div>
    </div>
  );
};

export default Post;
