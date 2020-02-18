import React from 'react';
import RecipeHeader from '../RecipeHeader';
import RecipeIngredients from '../RecipeIngredients/RecipeIngredients';
import { ScrollView } from 'react-native';
import RecipeInstructions from '../RecipeInstructions/RecipeInstructions';

export default RecipeDetails = ({ recipe, toggleIngredientsListHandler, isAdded }) => {
  return (
    <ScrollView>
      <RecipeHeader recipe={recipe} toggleIngredientsListHandler={toggleIngredientsListHandler} isAdded={isAdded} />
      <RecipeIngredients recipe={recipe} />
      <RecipeInstructions recipe={recipe} />
    </ScrollView>

  );
}
