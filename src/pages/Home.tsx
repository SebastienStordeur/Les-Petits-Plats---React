import React from "react";
import Header from "../components/Header/Header";
import Recipe from "../components/Recipes/Recipe";
import recipes from "../data/data.json";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      {recipes.recipes.map((recipe) => {
        console.log(recipe);
        return <Recipe {...recipe} />;
      })}
    </React.Fragment>
  );
};

export default Home;
