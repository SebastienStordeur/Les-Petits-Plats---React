import React, { useContext } from "react";

import Logo from "../../assets/logo.png";
import Input from "../UI/Input";
import { RecipeContext } from "../../store/recipesContext";

const Header: React.FC = () => {
  const recipeCtx = useContext(RecipeContext);
  return (
    <header id="header" className="header">
      <img src={Logo} alt="Les petits plats" className="logo" />
      <Input
        className="search-input"
        name="search"
        placeholder="Rechercher une recette"
        value={recipeCtx.searchValue}
        onChange={recipeCtx.handleSearchValue}
      />
    </header>
  );
};

export default Header;
