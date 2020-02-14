import recipes from '../../recipes';

const initialState = {
  recipes: recipes.FR.recipes,
  informations: recipes.FR.informations,
  ingredientsList: []
};

const recipesReducer = (state = initialState, action) => {
  return state;
}

export default recipesReducer;