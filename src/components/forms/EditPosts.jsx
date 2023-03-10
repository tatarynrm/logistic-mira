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
  const notify = (text) => toast.success(text);
  useEffect(() => {
    if (currentPost) {
      setStatusNote(currentPost.status);
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
          notify("??????????????????????????");
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="form">
            <div className="form__body">
              <div className="form__group">
                <label htmlFor="date">????????</label>
                <Field id="date" name="date" placeholder="????????" type="date" />
                {errors.date && touched.date ? (
                  <div className="form__error">{errors.date}</div>
                ) : null}
              </div>

              <div className="form__group">
                <label htmlFor="cityFrom">????????????????????????</label>
                <Field
                  id="cityFrom"
                  name="cityFrom"
                  placeholder="?????????? ????????????????????????"
                  autoComplete="off"
                />
                {errors.cityFrom && touched.cityFrom ? (
                  <div className="form__error">{errors.cityFrom}</div>
                ) : null}
              </div>

              <div className="form__group">
                <label htmlFor="cityTo">????????????????</label>
                <Field
                  id="cityTo"
                  name="cityTo"
                  placeholder="?????????? ????????????????"
                  type="text"
                />
                {errors.cityTo && touched.cityTo ? (
                  <div className="form__error">{errors.cityTo}</div>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="????????">????????</label>
                <Field
                  id="price"
                  name="price"
                  placeholder="???????? ??????????????????????"
                  type="text"
                />
                {errors.price && touched.price ? (
                  <div className="form__error">{errors.price}</div>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="????????">??????????</label>
                <Field
                  id="money"
                  name="money"
                  placeholder="??????????"
                  type="text"
                />
                {errors.money && touched.money ? (
                  <div className="form__error">{errors.money}</div>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="????????">????????????????</label>
                <Field
                  id="cargoOwner"
                  name="cargoOwner"
                  placeholder="????????????????"
                  type="text"
                />
                {errors.cargoOwner && touched.cargoOwner ? (
                  <div className="form__error">{errors.cargoOwner}</div>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="????????">??????????</label>
                <Field
                  id="driver"
                  name="driver"
                  placeholder="??????????"
                  type="text"
                />
                {errors.driver && touched.driver ? (
                  <div className="form__error">{errors.driver}</div>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="????????">????????????????????</label>
                <Field
                  id="car"
                  name="car"
                  placeholder="????????????????????"
                  type="text"
                />
                {errors.car && touched.car ? (
                  <div className="form__error">{errors.car}</div>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="????????">?????????????? ????????</label>
                <Field
                  id="carOwner"
                  name="carOwner"
                  placeholder="?????????????? ????????"
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
                  placeholder="??????????????,???????? ??????????????????"
                />
              </div>
            </div>
            <button type="submit">????????????????????</button>
          </Form>
        )}
      </Formik>
      <StatusForm id={id} />
      <Link to={"/"}>
        <Button cls={"return"} text={"?????????????????????? ???? ?????????????? ????????????????"} />
      </Link>
      <ToastContainer />
    </div>
  );
};

export default EditPosts;
