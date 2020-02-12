import React from 'react';
import {  } from './RecipesList.styles';
import { View, Text } from 'react-native';
import recipes from '../../recipes';


export default Recipeslist = () => {

  const recipesList = recipes.FR;

  return (
    <View>
      {recipesList.map(recipe => <Text>{recipe.name}</Text>)}
    </View>
  );
}
