import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";
import { BiDuplicate } from "react-icons/bi";
import TruncateMarkup from "react-truncate-markup";
import "./Post.scss";
import axios from "../../utils/axios/axios";
import { fetchPosts } from "../../redux/slices/posts";
import { useDispatch, useSelector } from "react-redux";
import Tooltip from "../tooltip/Tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostEditButtons from "../postEditButtons/PostEditButtons";
const Post = ({ obj, userData }) => {
  const [showCopy, setShowCopy] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const deletePost = async (id) => {
    if (window.confirm("Ви точно хочете видалити ?")) {
      const { data } = await axios.delete(`/notes/${id}`);
      dispatch(fetchPosts());
    }
  };

  return (
    <>
      {/* <PostEditButtons obj={obj} /> */}
      <div
        onMouseEnter={() => setShowCopy(!showCopy)}
        onMouseLeave={() => setShowCopy(!showCopy)}
        className={`post post__${obj.status}`}
      >
        {obj.note !== "" ? (
          <i
            onClick={() => setShowNote(!showNote)}
            className="post__note edit__button"
          >
            {showNote ? <AiFillEyeInvisible /> : <AiFillEye />}
          </i>
        ) : null}
        {showCopy ? <PostEditButtons obj={obj} /> : null}

        <div className={"date"}>{obj.date}</div>

        <TruncateMarkup lines={1}>
          <div className={"cityFrom"}>{obj.cityFrom.toUpperCase()}</div>
        </TruncateMarkup>
        <TruncateMarkup lines={1}>
          <div className={"cityTo"}>{obj.cityTo.toUpperCase()}</div>
        </TruncateMarkup>

        <div className={"price"}>{obj.price.toUpperCase()}</div>
        <div className={"money"}>{obj.money.toUpperCase()}</div>

        <TruncateMarkup lines={1}>
          <div className={"cargoOwner"}>{obj.cargoOwner.toUpperCase()}</div>
        </TruncateMarkup>
        <TruncateMarkup lines={1}>
          <div className={"driver"}>{obj.driver.toUpperCase()}</div>
        </TruncateMarkup>
        <TruncateMarkup lines={1}>
          <div className={"car"}>{obj.car.toUpperCase()}</div>
        </TruncateMarkup>
        <TruncateMarkup lines={1}>
          <div className={"carOwner"}>{obj.carOwner.toUpperCase()}</div>
        </TruncateMarkup>
        {obj.user._id === userData?._id ? (
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
      <ToastContainer />
    </>
  );
};

export default Post;
