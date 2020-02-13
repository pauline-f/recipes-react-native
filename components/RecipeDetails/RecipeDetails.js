import React from 'react';
import RecipeHeader from '../RecipeHeader';
import RecipeIngredients from '../RecipeIngredients/RecipeIngredients';
import { View } from 'react-native';

export default RecipeDetails = ({ recipe }) => {
  return (
    <View>
      <RecipeHeader recipe={recipe} />
      <RecipeIngredients recipe={recipe} />
    </View>
    
  );
}
