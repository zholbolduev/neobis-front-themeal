import React from "react";
import "./HeaderWidgets.scss";
import { Link } from "react-router-dom";

const HeaderWidgets = () => {
  return (
    <header>
      <Link to={"/"}> The Meal</Link>
    </header>
  );
};

export default HeaderWidgets;
