import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const IngredientsListScreen = () => {
  const ingredientsList = useSelector(state => state.recipes.ingredientsList);

  return (
    <View>
      {ingredientsList.map(recipe => <Text>{recipe.name}</Text>)}
    </View>
  )
};

export default IngredientsListScreen;