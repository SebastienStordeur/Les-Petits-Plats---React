import React, { useState } from "react";
import data from "../data/data.json";
import { RecipeI } from "../components/Recipes/Recipe";

type RecipeContextProviderProps = {
  children: React.ReactNode;
};

interface RecipeContextInterface {
  recipes: RecipeI[];
  filteredRecipes: RecipeI[];
  searchValue: string;
  handleSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterRecipes: () => void;
}

export const RecipeContext = React.createContext<RecipeContextInterface>({
  recipes: data.recipes,
  filteredRecipes: data.recipes,
  searchValue: "value",
  handleSearchValue: () => {},
  filterRecipes: () => {},
});

export const RecipeContextProvider = ({
  children,
}: RecipeContextProviderProps) => {
  const [filteredRecipes, setFilteredRecipes] = useState(data.recipes);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    console.log("value", event.target.value);
    filterRecipes();
  };

  const filterRecipes = () => {
    if (searchValue.length < 3) {
      setFilteredRecipes(data.recipes);
    }
    if (searchValue.length >= 3) {
      console.log(searchValue);
      setFilteredRecipes(
        data.recipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      console.log(searchValue);
    }

    console.log(filteredRecipes);
    return filteredRecipes;
  };

  const defaultValue = {
    recipes: data.recipes,
    filteredRecipes: filteredRecipes,
    searchValue: searchValue,
    handleSearchValue: handleSearchValue,
    filterRecipes: filterRecipes,
  };

  return (
    <RecipeContext.Provider value={defaultValue}>
      {children}
    </RecipeContext.Provider>
  );
};
