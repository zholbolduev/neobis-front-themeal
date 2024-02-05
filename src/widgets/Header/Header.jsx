import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  return <header onClick={() => navigate("/home")}>The Meal</header>;
};

export default Header;
