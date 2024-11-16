import React from "react";
import SearchBar from "./SearchBar";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const myArray = ["apple", "banana", "orange"];

  const myList = myArray.map((item) => <p>{item}</p>);
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
      <p>{myList}</p>
      <SearchBar />
    </div>
  );
};

export default RecommendationsList;
