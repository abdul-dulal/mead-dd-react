import React from "react";
import "./SingleMeal.css";
const SingleMeals = ({ meal }) => {
  const { strMeal, strMealThumb, strInstructions } = meal;
  return (
    <div className="single-meal">
      <div className="single">
        <img src={strMealThumb} width={220} height={220} alt="" />
      </div>
      <div className="meal-info">
        <h3>{strMeal}</h3>
        <p>{strInstructions.slice(0, 200)}</p>
      </div>
    </div>
  );
};

export default SingleMeals;
