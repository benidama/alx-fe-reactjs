import React from "react";
import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));

const recipeStore = () => {
  return (
    <div>
      <p>{useRecipeStore}</p>
    </div>
  );
};

export default recipeStore;
