import React from 'react';
import { Wrapper, Title, Ingredient } from './RecipeIngredients.styles';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

export default RecipeIngredients = ({ recipe }) => {
  const informations = useSelector(state => state.recipes.informations);
  return (
    <Wrapper>
      <Title>{informations.ingredients}</Title>
      <FlatList
        data={recipe.ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={itemData => (
          itemData.item.nb ? (
            <Ingredient>{itemData.item.nb} {itemData.item.name}</Ingredient>
          ) : (
              <Ingredient>{itemData.item.name}</Ingredient>
            )
        )}>
      </FlatList>
    </Wrapper>
  );
}
