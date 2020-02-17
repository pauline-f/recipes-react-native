import React from 'react';
import RecipesList from '../components/RecipesList/RecipesList';

const RecipesListScreen = props => {

  const navigateToRecipeDetails = (id, name) => {
    props.navigation.navigate('RecipeDetails', {recipeId: id, recipeName: name});
  };

  return (
    <RecipesList navigateToDetails={navigateToRecipeDetails} />
  );
};

export default RecipesListScreen;