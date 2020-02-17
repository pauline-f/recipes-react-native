import React from 'react';
import RecipeHeader from '../RecipeHeader';
import RecipeIngredients from '../RecipeIngredients/RecipeIngredients';
import { ScrollView } from 'react-native';
import RecipeInstructions from '../RecipeInstructions/RecipeInstructions';

export default RecipeDetails = ({ recipe, toggleIngredientsListHandler }) => {
  return (
    <ScrollView>
      <RecipeHeader recipe={recipe} toggleIngredientsListHandler={toggleIngredientsListHandler} />
      <RecipeIngredients recipe={recipe} />
      <RecipeInstructions recipe={recipe} />
    </ScrollView>

  );
}
