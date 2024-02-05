import React from "react";
import Header from "../../widgets/Header/Header";
import RandomFood from "../../widgets/RandomFood/RandomFood";
import SearchFood from "../../features/SearchFood/SearchFood";

const Home = () => {
  return (
    <div>
      <Header />
      <RandomFood />
      <SearchFood />
    </div>
  );
};

export default Home;
