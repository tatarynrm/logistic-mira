import React, { useEffect, useState } from "react";
import "./EditPosts.scss";
import { fetchPosts } from "../../redux/slices/posts";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";
import api from "../../utils/axios/axios";
import { createSchema } from "../../utils/validations/formValidations";
import { Link, Navigate } from "react-router-dom";
import Button from "../buttons/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StatusRadioButtons from "../inputs/StatusRadioButtons";
import StatusForm from "./StatusForm";
const EditPosts = ({ id, data }) => {
  const { posts } = useSelector((state) => state.posts);
  const currentPost = posts.items.find((post) => post._id === id);
  const [statusNote, setStatusNote] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentPost) {
      setStatusNote(currentPost.status);
      console.log(statusNote);
    }
  }, [currentPost]);
  const editPost = async (values) => {
    try {
      const res = await api.put(`/notes/${id}`, values);
      if (res.status === 201) {
        dispatch(fetchPosts());
      }
    } catch (err) {
      console.log(err);
    }
  };
  const submitStatus = async (values) => {
    try {
      const res = await api.put(`/notes/${id}`, values);
      if (res.status === 201) {
        dispatch(fetchPosts());
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onSelect = (e) => {
    setStatusNote(e.target.value);
    console.log(statusNote);
  };

  if (currentPost === undefined) {
    return <div>No data...</div>;
  }
  return (
    <div className="edit__form">
      <Formik
        initialValues={{
          date: currentPost.date,
          cityFrom: currentPost.cityFrom,
          cityTo: currentPost.cityTo,
          price: currentPost.price,
          money: currentPost.money,
          driver: currentPost.driver,
          car: currentPost.car,
          carOwner: currentPost.carOwner,
          cargoOwner: currentPost.cargoOwner,
          note: currentPost.note,
          status: statusNote,
        }}
        validationSchema={createSchema}
        onSubmit={(values, { resetForm }, statusNote) => {
          editPost(values);
          console.log("--------------", statusNote);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="form">
            <div className="form__body">
              <div className="form__group">
                <label htmlFor="date">Дата</label>
                <Field id="date" name="date" placeholder="Дата" type="date" />
                {errors.date && touched.date ? (
                  <div className="form__error">{errors.date}</div>
                ) : null}
              </div>

              <div className="form__group">
                <label htmlFor="cityFrom">Завантаження</label>
                <Field
                  id="cityFrom"
                  name="cityFrom"
                  placeholder="Місто завантаження"
                  autoComplete="off"
                />
                {errors.cityFrom && touched.cityFrom ? (
                  <div className="form__error">{errors.cityFrom}</div>
                ) : null}
              </div>

              <div className="form__group">
                <label htmlFor="cityTo">Вигрузка</label>
                <Field
                  id="cityTo"
                  name="cityTo"
                  placeholder="Місто вигрузки"
                  type="text"
                />
                {errors.cityTo && touched.cityTo ? (
                  <div className="form__error">{errors.cityTo}</div>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="Ціна">Ціна</label>
                <Field
                  id="price"
                  name="price"
                  placeholder="Ціна перевезення"
                  type="text"
                />
                {errors.price && touched.price ? (
                  <div className="form__error">{errors.price}</div>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="Ціна">Маржа</label>
                <Field
                  id="money"
                  name="money"
                  placeholder="Маржа"
                  type="text"
                />
                {errors.money && touched.money ? (
                  <div className="form__error">{errors.money}</div>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="Ціна">Замовник</label>
                <Field
                  id="cargoOwner"
                  name="cargoOwner"
                  placeholder="Замовник"
                  type="text"
                />
                {errors.cargoOwner && touched.cargoOwner ? (
                  <div className="form__error">{errors.cargoOwner}</div>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="Ціна">Водій</label>
                <Field
                  id="driver"
                  name="driver"
                  placeholder="Водій"
                  type="text"
                />
                {errors.driver && touched.driver ? (
                  <div className="form__error">{errors.driver}</div>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="Ціна">Автомобіль</label>
                <Field
                  id="car"
                  name="car"
                  placeholder="Автомобіль"
                  type="text"
                />
                {errors.car && touched.car ? (
                  <div className="form__error">{errors.car}</div>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="Ціна">Власник авто</label>
                <Field
                  id="carOwner"
                  name="carOwner"
                  placeholder="Власник авто"
                  type="text"
                />
                {errors.carOwner && touched.carOwner ? (
                  <div className="form__error">{errors.carOwner}</div>
                ) : null}
              </div>
            </div>
            <div className="notes">
              <div className="form__group">
                <Field
                  as="textarea"
                  type="text"
                  rows="4"
                  id="note"
                  name="note"
                  placeholder="Нотатки,якщо необхідно"
                />
              </div>
              <div className="notes__status">
                {/* <StatusRadioButtons
                  data={currentPost}
                  setStatus={setStatus}
                  status={status}
                /> */}
                {/* <input
                  type="radio"
                  name="status"
                  value="done"
                  onChange={(e) => onChangeStatus(e)}
                />
                <input
                  type="radio"
                  name="status"
                  value="undone"
                  onChange={(e) => onChangeStatus(e)}
                />
                <input
                  type="radio"
                  name="status"
                  value="active"
                  onChange={(e) => onChangeStatus(e)}
                />
              </div> */}
              </div>
            </div>
            <button type="submit">Редагувати</button>
          </Form>
        )}
      </Formik>
      <StatusForm id={id} />
      <Link to={"/"}>
        <Button cls={"return"} text={"Повернутись на головну сторінку"} />
      </Link>
      <ToastContainer />
    </div>
  );
};

export default EditPosts;
