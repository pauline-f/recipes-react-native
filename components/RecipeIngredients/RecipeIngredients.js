import React from 'react';
import { Wrapper, Title, Ingredient } from './RecipeIngredients.styles';
import { FlatList } from 'react-native';

export default RecipeIngredients = ({ recipe }) => {
  return (
    <Wrapper>
      <Title>Ingredients</Title>
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
