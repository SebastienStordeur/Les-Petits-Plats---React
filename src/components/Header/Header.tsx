import React from "react";

import Logo from "../../assets/logo.png";
import Input from "../UI/Input";

const Header: React.FC = () => {
  const searchInputHandler = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {};
  return (
    <header id="header" className="header">
      <img src={Logo} alt="Les petits plats" className="logo" />
      <Input
        className="search-input"
        name="search"
        placeholder="Rechercher une recette"
        value=""
        onChange={searchInputHandler}
      />
    </header>
  );
};

export default Header;
