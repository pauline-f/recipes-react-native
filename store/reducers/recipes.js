import recipes from '../../recipes';

const initialState = {
  recipes: recipes,
  ingredientsList: []
};

const recipesReducer = (state = initialState, action) => {
  return state;
}

export default recipesReducer;