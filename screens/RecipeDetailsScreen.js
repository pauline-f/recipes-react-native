import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import RecipeDetails from '../components/RecipeDetails';
import recipes from '../recipes';

const RecipeDetailsScreen = props => {
  const recipesList = useSelector(state => state.recipes.recipes);
  const RecId = props.navigation.getParam('recipeId');
  const selectedRecipe = recipesList.find(recipe => recipe.id === RecId);
  return (
    <View>
      <RecipeDetails recipe={selectedRecipe} />
    </View>
  )
};

RecipeDetailsScreen.navigationOptions = navigationData => {
  const recipesList = recipes.FR.recipes;
  const RecId = navigationData.navigation.getParam('recipeId');
  const selectedRecipe = recipesList.find(recipe => recipe.id === RecId);
  return {
    headerTitle: selectedRecipe.name
  };
}

export default RecipeDetailsScreen;