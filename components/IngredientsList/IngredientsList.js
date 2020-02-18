import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import RecipeItem from '../RecipeItem';

export default IngredientsList = () => {
  const recipesAdded = useSelector(state => state.recipes.ingredientsList);

  return (
    <View>
      <FlatList
        data={recipesAdded}
        renderItem={itemData => (
          <RecipeItem recipe={itemData.item} key={itemData.item.id} />
        )}>
      </FlatList>
    </View>
  );
}
