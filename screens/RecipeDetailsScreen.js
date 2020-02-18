import React, { useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import RecipeDetails from '../components/RecipeDetails/RecipeDetails';
import { toggleAdd } from '../store/actions/IngredientsList';

const RecipeDetailsScreen = props => {
  const recipesList = useSelector(state => state.recipes.recipes);
  const recId = props.navigation.getParam('recipeId');
  const selectedRecipe = recipesList.find(recipe => recipe.id === recId);

  const isAdded = useSelector(state => state.recipes.ingredientsList.some(recipe => recipe.id === recId));

  const dispatch = useDispatch();

  const toggleIngredientsListHandler = useCallback(() => {
    dispatch(toggleAdd(recId));
  }, [dispatch, recId]);

  useEffect(() => {
    toggleIngredientsListHandler;
  }, [toggleIngredientsListHandler]);

  useEffect(() => {
    isAdded;
  }, [isAdded]);

  return (
    <View>
      <RecipeDetails recipe={selectedRecipe} toggleIngredientsListHandler={toggleIngredientsListHandler} isAdded={isAdded} />
    </View>
  )
};

RecipeDetailsScreen.navigationOptions = navigationData => {
  const RecipeName = navigationData.navigation.getParam('recipeName');
  return {
    headerTitle: RecipeName
  };
}

export default RecipeDetailsScreen;