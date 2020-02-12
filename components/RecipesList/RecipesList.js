import React from 'react';
import { FlatList } from 'react-native';
import recipes from '../../recipes';
import RecipeItem from '../RecipeItem';

export default Recipeslist = () => {

  const recipesList = recipes.FR;

  return (
    <FlatList
      data={recipesList}
      renderItem={itemData => (
        <RecipeItem recipe={itemData.item} key={itemData.item.id} />
      )}>
    </FlatList>
  );
}
