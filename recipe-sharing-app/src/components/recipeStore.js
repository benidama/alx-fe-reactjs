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
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      // Mock implementation based on favorites
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
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
