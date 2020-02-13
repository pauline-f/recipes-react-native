import React from 'react';
import { View } from 'react-native';
import recipes from '../recipes';
import RecipeDetails from '../components/RecipeDetails';

const RecipeDetailsScreen = props => {
  const recipesList = recipes.FR;
  const RecId = props.navigation.getParam('recipeId');
  const selectedRecipe = recipesList.find(recipe => recipe.id === RecId);
  return (
    <View>
      <RecipeDetails recipe={selectedRecipe} />
    </View>
  )
};

RecipeDetailsScreen.navigationOptions = navigationData => {
  const recipesList = recipes.FR;
  const RecId = navigationData.navigation.getParam('recipeId');
  const selectedRecipe = recipesList.find(recipe => recipe.id === RecId);
  return {
    headerTitle: selectedRecipe.name
  };
}

export default RecipeDetailsScreen;