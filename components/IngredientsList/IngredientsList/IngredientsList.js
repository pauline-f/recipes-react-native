import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Message } from './IngredientsList.styles';
import IngredientsRecipeItem from '../IngredientsRecipeItem/IngredientsRecipeItem';

export default IngredientsList = () => {
  const recipesAdded = useSelector(state => state.recipes.ingredientsList);
  const informations = useSelector(state => state.recipes.informations);

  return (
    <View>
      {recipesAdded.length > 0 ? (
        <FlatList
          data={recipesAdded}
          renderItem={itemData => (
            <IngredientsRecipeItem recipe={itemData.item} key={itemData.item.id} />
          )}>
        </FlatList>
      ) : (
          <Message>{informations.messageNoRecipesSelected}</Message>
        )}
    </View>
  );
}
