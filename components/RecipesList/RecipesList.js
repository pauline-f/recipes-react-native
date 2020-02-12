import React from 'react';
import {  } from './RecipesList.styles';
import { View } from 'react-native';
import recipes from '../../recipes';
import RecipeItem from '../RecipeItem';


export default Recipeslist = () => {

  const recipesList = recipes.FR;

  return (
    <View>
      {recipesList.map(recipe => <RecipeItem name={recipe.name} image={recipe.image} />)}
    </View>
  );
}
