import React, { useState } from "react";
import data from "../data/data.json";
import { RecipeI } from "../components/Recipes/Recipe";

type RecipeContextProviderProps = {
  children: React.ReactNode;
};

//  Types of property 'handleSearchValue' are incompatible.
//Type '(event: React.ChangeEvent<HTMLInputElement>) => void' is not assignable to type '() => void'.
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
  searchValue: "",
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
  };

  const filterRecipes = () => {
    if (searchValue.length >= 3) {
      setFilteredRecipes(
        filteredRecipes.filter(
          (recipes) =>
            recipes.name.includes(searchValue) ||
            recipes.description.includes(searchValue)
        )
      );
    }
    return filterRecipes;
  };

  const defaultValue = {
    recipes: data.recipes,
    filteredRecipes: filteredRecipes,
    searchValue: "",
    handleSearchValue: handleSearchValue,
    filterRecipes: filterRecipes,
  };

  return (
    <RecipeContext.Provider value={defaultValue}>
      {children}
    </RecipeContext.Provider>
  );
};
