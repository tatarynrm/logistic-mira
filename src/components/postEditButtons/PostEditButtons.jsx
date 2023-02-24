import React, { useState } from "react";
import "./PostEditButtons.scss";
import { FiCopy } from "react-icons/fi";
import { GrDuplicate } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../utils/axios/axios";
import { fetchPosts } from "../../redux/slices/posts";
import { useDispatch } from "react-redux";

const PostEditButtons = ({ obj }) => {
  const dispatch = useDispatch();
  const notify = (text) => toast.success(text);
  const copyInfo = (e) => {
    const text = `Дата завантаження: ${obj.date}\nЗавантаження: ${obj.cityFrom}\nВигрузка: ${obj.cityTo}\nЦіна перевезення: ${obj.price}\nВантажовідправник: ${obj.cargoOwner}\nВодій: ${obj.driver}\nАвтомобіль: ${obj.car}\nЛогіст по транспортним перевезенням\nТатарин Мирослава 0989578520`;
    navigator.clipboard.writeText(text);
    if (ClipboardEvent) {
      notify(text);
    }
  };

  const createDuplicate = async () => {
    try {
      if (window.confirm("Створити дублікат заявки ?")) {
        const { data } = await axios.post("/notes/duplicate", {
          date: obj.date,
          date: obj.date,
          cityFrom: obj.cityFrom,
          cityTo: obj.cityTo,
          price: obj.price,
          money: obj.money,
          driver: obj.driver,
          car: obj.car,
          carOwner: obj.carOwner,
          cargoOwner: obj.cargoOwner,
          note: obj.note,
          status: obj.status,
        });
        dispatch(fetchPosts());
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="post__edit-buttons">
      <div className="edit__button icon__copy" onClick={(e) => copyInfo(e)}>
        <i>
          <FiCopy />
        </i>
      </div>
      <div onClick={createDuplicate} className="edit__button icon__copy">
        <i>
          <GrDuplicate />
        </i>
      </div>
    </div>
  );
};

export default PostEditButtons;
