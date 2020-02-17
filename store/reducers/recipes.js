import recipes from '../../recipes';
import { TOGGLE_ADD } from '../actions/IngredientsList';

const initialState = {
  recipes: recipes.FR.recipes,
  informations: recipes.FR.informations,
  ingredientsList: []
};

const recipesReducer = (state = initialState, action) => {
  console.log(TOGGLE_ADD);
  switch (action.type) {
    case TOGGLE_ADD: 
      const existingIndex = state.ingredientsList.findIndex(recipe => recipe.id === action.recipeId);
      console.log(existingIndex);
      if (existingIndex >= 0) {
        const updateIngredientsList = [...state.ingredientsList];
        updateIngredientsList.splice(existingIndex, 1);
        return { ...state, ingredientsList: updateIngredientsList };
      } else {
        const recipe = state.recipes.find(r => r.id === action.recipeId);
        return { ...state, ingredientsList: state.ingredientsList.concat(recipe)};
      }
      default:
        return state;
  }
}

export default recipesReducer;