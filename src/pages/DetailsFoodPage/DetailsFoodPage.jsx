import React, { useEffect, useState } from "react";
import Header from "../../widgets/Header/Header";
import "./DetailsFoodPage.scss";
import { useParams } from "react-router";
import axios from "axios";
import { idAPI } from "../../shared/BaseAPI";

const DetailsFood = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);

  console.log(id);

  useEffect(() => {
    axios
      .get(`${idAPI}${id}`)
      .then((data) => {
        console.log(data.data.meals[0]);
        setMeal(data.data.meals[0]);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }, [id]);

  return (
    <div>
      <Header />
      <div className="mealDetail">
        <section className="mealDetail__baseInfoBlock">
          <div className="mealDetail__baseInfoBlock__text">
            <p className="mealDetail__baseInfoBlock__text--title">
              {meal.strMeal}
            </p>
            <p className="mealDetail__baseInfoBlock__text--miniInfo">
              {meal.strCategory} | {meal.strArea}
            </p>
            <div className="ingredients">
              <ul>
                {meal &&
                  Object.keys(meal).map((key) => {
                    const ingredientNumber = key.slice(-1);
                    if (key.startsWith("strIngredient") && meal[key]) {
                      return (
                        <li key={ingredientNumber}>
                          - {meal[key]}{" "}
                          <b>{meal[`strMeasure${ingredientNumber}`]}</b>
                        </li>
                      );
                    }
                    return null;
                  })}
              </ul>
            </div>
          </div>
          <div className="mealDetail__baseInfoBlock__img">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        </section>

        <section className="mealDetail__instruction">
          <h2>Instruction</h2>
          <pre>{meal.strInstructions}</pre>
          <a
            className="mealDetail__instruction--youtube"
            href={meal.strYoutube}
          >
            Watch on YouTube
          </a>
        </section>
      </div>
    </div>
  );
};

export default DetailsFood;
