import React from "react";
import "./CreatePosts.scss";
import { fetchPosts } from "../../redux/slices/posts";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form } from "formik";
import api from "../../utils/axios/axios";
import { createSchema } from "../../utils/validations/formValidations";
const CreatePosts = () => {
  const dispatch = useDispatch();

  const createPost = async (values) => {
    try {
      const res = await api.post("/notes", values);

      if (res.status === 201) {
        dispatch(fetchPosts());
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="create__form">
      <Formik
        initialValues={{
          date: "",
          cityFrom: "",
          cityTo: "",
          price: "",
          money: "",
          driver: "",
          car: "",
          carOwner: "",
          cargoOwner: "",
        }}
        validationSchema={createSchema}
        onSubmit={(values, { resetForm, error, status }) => {
          createPost(values);
          // resetForm();
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="form">
            <div className="form__body">
              <div className="form__group form__date">
                <label htmlFor="date">Дата</label>
                <Field id="date" name="date" placeholder="Дата" type="date" />
                {errors.date && touched.date ? (
                  <div className="form__error">{errors.date}</div>
                ) : null}
              </div>

              <div className="form__group form__cityFrom">
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

              <div className="form__group form__cityTo">
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
              <div className="form__group form__price">
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
              <div className="form__group form__money">
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
              <div className="form__group form__cargoOwner">
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
              <div className="form__group form__driver">
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
              <div className="form__group form__car">
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
              <div className="form__group form__carOwner">
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
            {errors.date &&
            errors.cityFrom &&
            errors.cityTo &&
            errors.price &&
            errors.cargoOwner ? (
              <button disabled type="submit">
                Створити запис
              </button>
            ) : (
              <button type="submit">Створити запис</button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreatePosts;
