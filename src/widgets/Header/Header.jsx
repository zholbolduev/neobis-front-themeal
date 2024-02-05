import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}> The Meal</Link>
    </header>
  );
};

export default Header;
