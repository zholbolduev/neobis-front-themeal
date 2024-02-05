import React from "react";
import "./SearchFood.scss";

const SearchFood = () => {
  return (
    <div className="search">
      <h2>Find your Meal</h2>
      <form>
        <input type="text" placeholder="Find your Meal" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchFood;
