import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import Button from "../buttons/Button";
import "./Header.scss";
const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const onClickLogout = () => {
    if (window.confirm("Ви впенені що хочете вийти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };
  return (
    <header className="header container">
      <Link to={isAuth ? "/" : "/login"}>
        <Button text={"Logistic"} cls={"normal"} />
      </Link>
      <div
        style={isAuth ? { display: "flex", justifyContent: "flex-end" } : null}
        className="header__buttons"
      >
        {isAuth ? (
          <>
            <Button func={onClickLogout} text={"Вийти"} cls={"danger"} />
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <Button text={"Увійти"} cls={"normal"} />
            </Link>
            <Link to={"/register"}>
              <Button text={"Зареєсруватись"} cls={"normal"} />
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
