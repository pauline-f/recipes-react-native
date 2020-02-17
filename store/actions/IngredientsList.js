export const TOGGLE_ADD = 'TOGGLE_ADD';

export const toggleAdd = (id) => {
  return {type: TOGGLE_ADD, recipeId: id};
};