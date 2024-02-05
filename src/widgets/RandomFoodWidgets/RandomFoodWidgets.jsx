import React, { useEffect, useState } from "react";
import "./RandomFoodWidgets.scss";
import { Link } from "react-router-dom";
import { getRandomMeal } from "./RandomFoodWidgetsAction";

const RandomFoodWidgets = () => {
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    const fetchRandomMeal = async () => {
      const randomMeal = await getRandomMeal();
      setMeal(randomMeal);
    };
    fetchRandomMeal();
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

export default RandomFoodWidgets;
