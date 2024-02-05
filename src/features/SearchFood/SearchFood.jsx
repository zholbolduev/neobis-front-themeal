import React, { useEffect, useState } from "react";
import "./SearchFood.scss";
import axios from "axios";
import { searchAPI } from "../../shared/BaseAPI";
import { Link } from "react-router-dom";

const SearchFood = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const getMeal = async (e) => {
    e.preventDefault();
    if (!inputValue) return;
    try {
      const response = await axios.get(`${searchAPI}${inputValue}`);
      setResult(response.data.meals[0]);
      console.log(response.data.meals[0]);
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div className="searchPost">
      <h2 className="searchPost--h2">Find your Meal</h2>
      <form className="searchPost__form" onSubmit={getMeal}>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Find your Meal"
        />
        <button type="submit">Search</button>
      </form>

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
    </div>
  );
};

export default SearchFood;
