// RecipeDetails component
import { useRecipeStore } from "./recipeStore";

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  const updateRecipe = useRecipeStore((ne) =>
    ne.recipes.find((recipe) => recipe.id === reciped)
  );
  const deleteRecipe = useRecipeStore((open) =>
    open.recipes.find((recipe) => recipe.id === recipeCd)
  );

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{updateRecipe}</p>
      <p>{deleteRecipe}</p>
      <p>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
    </div>
  );
};
export default RecipeDetails;
