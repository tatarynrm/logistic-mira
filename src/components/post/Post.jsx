import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import "./Post.scss";
import axios from "../../utils/axios/axios";
import { fetchPosts } from "../../redux/slices/posts";
import { useDispatch, useSelector } from "react-redux";
import Tooltip from "../tooltip/Tooltip";
const Post = ({ obj, userData }) => {
  const [showNote, setShowNote] = useState(false);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(obj.status);
  const deletePost = async (id) => {
    if (window.confirm("Ви точно хочете видалити ?")) {
      const { data } = await axios.delete(`/notes/${id}`);
      dispatch(fetchPosts());
    }
  };
  return (
    <>
      <div className={`post post__${obj.status}`}>
        {obj.note !== "" ? (
          <i
            onClick={() => setShowNote(!showNote)}
            className="post__note edit__button"
          >
            {showNote ? <AiFillEyeInvisible /> : <AiFillEye />}
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
        {userData._id === obj.user._id ? (
          <div className="post__edit_buttons">
            <div>
              <Link to={`/notes/${obj._id}`}>
                <i
                  style={{ fontSize: "30px", color: "rgb(58, 169, 233)" }}
                  className="edit__button edit_btn"
                >
                  <MdModeEditOutline />
                </i>
              </Link>
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
      {showNote ? <Tooltip tooltip={obj.note} csl={showNote} /> : null}
    </>
  );
};

export default Post;
