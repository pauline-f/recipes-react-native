import React from 'react';
import RecipesList from '../components/RecipesList/RecipesList';
import { Button, View } from 'react-native';

const RecipesListScreen = props => {

  const navigateToRecipeDetails = (id, name) => {
    props.navigation.navigate('RecipeDetails', { recipeId: id, recipeName: name });
  };

  const navigateToIngredientsList = () => {
    props.navigation.navigate('IngredientsList');
  };

  return (
    <View>
      <RecipesList navigateToDetails={navigateToRecipeDetails} />
      <Button title='Ingredients List' onPress={navigateToIngredientsList} />
    </View>
  );
};

export default RecipesListScreen;