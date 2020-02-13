import React from 'react';
import RecipesList from '../components/RecipesList/RecipesList';

const RecipesListScreen = props => {

  const navigateToRecipeDetails = (id) => {
    props.navigation.navigate('RecipeDetails', {recipeId: id});
  };

  return (
    <RecipesList navigateToDetails={navigateToRecipeDetails} />
  );
};

export default RecipesListScreen;