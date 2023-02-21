import * as Yup from "yup";
export const createSchema = Yup.object().shape({
  date: Yup.string().required("Обов'язкове поле"),
  cityFrom: Yup.string().required("Обов'язкове поле"),
  cityTo: Yup.string().required("Обов'язкове поле"),
  price: Yup.number()
    .typeError("Тільки цифри")
    .required("Обов'язкове поле")
    .moreThan(0, "Не може бути 0"),
  money: Yup.number()
    .typeError("Тільки цифри")
    .required("Обов'язкове поле")
    .moreThan(0, "Не може бути 0"),
  driver: Yup.string().required("Обов'язкове поле"),
  car: Yup.string().required("Обов'язкове поле"),
  carOwner: Yup.string().required("Обов'язкове поле"),
  cargoOwner: Yup.string().required("Обов'язкове поле"),
});

export const loginSchema = Yup.object().shape({
  password: Yup.string().required(`Обов'язкове поле`),
  email: Yup.string().email("Не коректний емейл").required(`Обов'язкове поле`),
});
export const registerSchema = Yup.object().shape({
  password: Yup.string().required(`Обов'язкове поле`),
  firstName: Yup.string().required(`Обов'язкове поле`),
  lastName: Yup.string().required(`Обов'язкове поле`),
  email: Yup.string().email("Не коректний емейл").required(`Обов'язкове поле`),
});
