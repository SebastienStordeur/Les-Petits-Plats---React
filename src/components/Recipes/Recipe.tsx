import React from "react";
import Card from "../UI/Card";

import Timer from "../../assets/timer.png";

interface Ingredient {
  ingredient: string;
  quantity?: number | undefined;
  unit?: string | undefined;
}

export interface RecipeI {
  id: number;
  name: string;
  time: number;
  appliance: string;
  description: string;
  ingredients: any;
  ustensils: string[];
}

const Recipe: React.FC<RecipeI> = (props) => {
  return (
    <Card>
      <div className="recipe-image"></div>
      <div className="recipe-infos">
        <div className="recipe-main-infos">
          <h2 className="recipe-name">{props.name}</h2>
          <span className="timer">
            <img src={Timer} alt="Timer" className="image-timer" />
            {props.time} min
          </span>
        </div>
        <div className="recipe-important-infos">
          <div className="ingredients-infos">
            <ul>
              {props.ingredients.map((ingredient: Ingredient) => {
                return (
                  (!ingredient.unit && !ingredient.quantity && (
                    <li className="ingredient" key={Math.random().toString()}>
                      <span>{ingredient.ingredient}</span>
                    </li>
                  )) ||
                  (ingredient.unit && (
                    <li className="ingredient" key={Math.random().toString()}>
                      <span>{ingredient.ingredient}</span> :{" "}
                      {ingredient.quantity} {ingredient.unit}
                    </li>
                  )) ||
                  (!ingredient.unit && (
                    <li className="ingredient" key={Math.random().toString()}>
                      <span>{ingredient.ingredient}</span> :{" "}
                      {ingredient.quantity}
                    </li>
                  ))
                );
              })}
            </ul>
          </div>
          <div className="recipe-description">{props.description}</div>
        </div>
      </div>
    </Card>
  );
};

export default Recipe;
