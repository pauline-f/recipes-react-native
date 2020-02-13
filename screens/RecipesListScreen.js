import React from 'react';
import RecipesList from '../components/RecipesList/RecipesList';

const RecipesListScreen = props => {

  const navigateToRecipeDetails = () => {
    props.navigation.navigate('RecipeDetails');
  };

  return (
    <RecipesList navigateToDetails={navigateToRecipeDetails} />
  );
};

export default RecipesListScreen;