import React from 'react';
import { View, Text } from 'react-native';
import recipes from '../recipes';

const RecipeDetailsScreen = props => {
  const recipesList = recipes.FR;
  const RecId = props.navigation.getParam('recipeId');
  const selectedRecipe = recipesList.find(recipe => recipe.id === RecId);
  return (
    <View>
      <Text>{selectedRecipe.name}</Text>
    </View>
  )
};

export default RecipeDetailsScreen;