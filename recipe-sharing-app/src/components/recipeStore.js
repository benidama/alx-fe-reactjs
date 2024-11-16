import React from "react";
import create from "zustand";
import { useRecipeStore } from "./recipeStore";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

const recipeStore = () => {
  const updateRecipe = useRecipeStore((ne) =>
    ne.recipes.update((recipe) => recipe.id === reciped)
  );
  const deleteRecipe = useRecipeStore((open) =>
    open.recipes.delete((recipe) => recipe.id === recipeCd)
  );
  return (
    <div>
      <p>{useRecipeStore}</p>
      <p>{updateRecipe}</p>
      <p>{deleteRecipe}</p>
    </div>
  );
};

export default recipeStore;
