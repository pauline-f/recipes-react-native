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

RecipesListScreen.navigationOptions = {
  headerTitle: 'Vegetarian recipes',
  headerStyle: {
    backgroundColor: '#43a047'
  },
  headerTintColor: 'white'
}

export default RecipesListScreen;