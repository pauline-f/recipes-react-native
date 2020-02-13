import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import recipes from '../../recipes';
import RecipeItem from '../RecipeItem';

export default Recipeslist = ({ navigateToDetails }) => {

  const recipesList = recipes.FR;

  return (
    <View>
      <FlatList
        data={recipesList}
        renderItem={itemData => (
          <TouchableOpacity onPress={() => navigateToDetails(itemData.item.id)}>
            <RecipeItem recipe={itemData.item} key={itemData.item.id} />
          </TouchableOpacity>
        )}>
      </FlatList>
    </View>
  );
}
