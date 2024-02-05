import React, { useState } from "react";
import "./SearchFoodFeatures.scss";
import { Link } from "react-router-dom";
import { getMeal } from "./SearchFoodFeaturesAction";

const SearchFoodFeatures = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue) return;
    const meal = await getMeal(inputValue);
    setResult(meal);
  };

  return (
    <div className="searchPost">
      <h2 className="searchPost--h2">Find your Meal</h2>
      <form className="searchPost__form" onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Find your Meal"
        />
        <button type="submit">Search</button>
      </form>

      {result && (
        <div className="searchView">
          <Link key={result.idMeal} to={`/details/${result.idMeal}`}>
            <div className="searchView__infoBlock">
              <img src={result.strMealThumb} alt={result.strMeal} />
              <div className="searchView__infoBlock__text">
                <h3>{result.strMeal}</h3>
                <p>
                  {result.strCategory} | {result.strArea}
                </p>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchFoodFeatures;
