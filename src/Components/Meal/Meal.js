import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleMeals from "../singleMeals/SingleMeals";
import "./Meal.css";

const Meal = () => {
  const [meals, setMeal] = useState([]);
  const [searchMeal, setSearchMeal] = useState("");
  console.log(searchMeal);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals));
  }, []);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals));
  }, [searchMeal]);
  return (
    <div>
      <input
        type="text"
        placeholder="What you Want"
        onChange={(e) => setSearchMeal(e.target.value)}
      />
      <h3 className="text">Meal Status: {meals.length}</h3>
      <div className="meal-container">
        {meals.map((meal) => (
          <SingleMeals meal={meal} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default Meal;
