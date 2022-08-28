import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Recipe from "../components/Recipes/Recipe";
import Button from "../components/UI/Button";
import { RecipeContext } from "../store/recipesContext";

const Home: React.FC = () => {
  const recipeCtx = useContext(RecipeContext);
  return (
    <React.Fragment>
      <Header />
      <section className="filter-section">
        <Button className="blue">
          Ingrédients
          <img src="../assets/chevron_down.png" alt="" className="test" />
        </Button>
        <Button className="green">Appareils</Button>
        <Button className="red">Ustensils</Button>
      </section>
      <section className="recipe-section">
        {recipeCtx.filteredRecipes.map((recipe) => {
          return <Recipe {...recipe} key={recipe.id} />;
        })}
      </section>
    </React.Fragment>
  );
};

export default Home;
