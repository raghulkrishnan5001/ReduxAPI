import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../Features/Userslice";
import { Link } from "react-router-dom";
import "./Logout.scss";

const Logout = () => {
  // const user = useSelector(selectUser);

  // const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    // dispatch(logout());
  };
  return (
    <div className="logout">
      <h1>
        Welcome <span className="user_name"></span>
      </h1>
      <Link to ={"/"}>
      <button className="logout_button">
        Logout
      </button></Link>
      <br />
      <Link to={"/product"}>
        <button className="view_list">View List</button>
      </Link>

    </div>
  );
};

export default Logout;
