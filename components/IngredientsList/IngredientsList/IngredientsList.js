import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import RecipeItem from '../../RecipesList/RecipeItem';
import { Message } from './IngredientsList.styles';

export default IngredientsList = () => {
  const recipesAdded = useSelector(state => state.recipes.ingredientsList);
  const informations = useSelector(state => state.recipes.informations);

  return (
    <View>
      {recipesAdded.length > 0 ? (
        <FlatList
          data={recipesAdded}
          renderItem={itemData => (
            <RecipeItem recipe={itemData.item} key={itemData.item.id} />
          )}>
        </FlatList>
      ) : (
          <Message>{informations.messageNoRecipesSelected}</Message>
        )}
    </View>
  );
}
