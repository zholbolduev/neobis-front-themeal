import React, { useEffect, useState } from "react";
import "./RandomFood.scss";
import axios from "axios";
import { randomAPI } from "../../shared/BaseAPI";
import { Link } from "react-router-dom";

const RandomFood = () => {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    axios
      .get(randomAPI)
      .then((data) => {
        console.log(data.data.meals[0]);
        setMeal(data.data.meals[0]);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div className="randomMeal">
      <div className="randomMeal__info">
        <h2 className="randomMeal__info--head">Meal of the Day</h2>
        <Link
          key={meal.idMeal}
          to={`/details/${meal.idMeal}`}
          className="randomMeal__info--name"
        >
          {meal.strMeal}
        </Link>
        <p className="randomMeal__info--country">
          {meal.strCategory} | {meal.strArea}
        </p>
      </div>

      <div className="randomMeal__imgBlock">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
    </div>
  );
};

export default RandomFood;
