import React from "react";
// import useRecipeStore from "./useRecipeStore";
import { useRecipeStore } from "./recipeStore";

const recipeStore = () => {
  return (
    <div>
      <useRecipeStore />
    </div>
  );
};

export default recipeStore;
