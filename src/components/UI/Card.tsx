import React from "react";

interface CardI {
  children: React.ReactNode;
}

const Card: React.FC<CardI> = (props) => {
  return <article className="recipe">{props.children}</article>;
};

export default Card;
