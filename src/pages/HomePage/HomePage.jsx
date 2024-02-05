import React from "react";
import SearchFoodFeatures from "../../features/SearchFoodFeatures/SearchFoodFeatures";
import HeaderWidgets from "../../widgets/HeaderWidgets/HeaderWidgets";
import RandomFoodWidgets from "../../widgets/RandomFoodWidgets/RandomFoodWidgets";

const HomePage = () => {
  return (
    <div>
      <HeaderWidgets />
      <RandomFoodWidgets />
      <SearchFoodFeatures />
    </div>
  );
};

export default HomePage;
