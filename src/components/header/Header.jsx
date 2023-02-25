import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { logout, selectIsAuth } from "../../redux/slices/auth";
import Button from "../buttons/Button";
import "./Header.scss";
const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector((state) => state.auth.data);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const token = window.localStorage.getItem("token");
  const onClickLogout = () => {
    if (window.confirm("Ви впенені що хочете вийти?")) {
      window.localStorage.removeItem("token");
      dispatch(logout());
    }
  };

  return (
    <header className="header container">
      <Link to={token ? "/" : "/login"}>
        <Button text={"Logistic"} cls={"normal"} />
      </Link>
      {token ? (
        <>
          <Link to={"/lardi"}>
            <Button text={"Lardi"} cls={"normal"} />
          </Link>
        </>
      ) : null}
      <div
        // style={token ? { display: "flex", justifyContent: "flex-end" } : ""}
        className="header__buttons"
      >
        <div className="header__user-info">
          <span>
            {userData ? `${userData.firstName} ${userData.lastName}` : null}
          </span>
        </div>
        {token ? (
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
