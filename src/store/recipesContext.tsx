import React from "react";
import data from "../data/data.json";

export const RecipeContext = React.createContext({
  recipes: data.recipes,
  filteredRecipes: data.recipes,
  searchValue: "",
});
