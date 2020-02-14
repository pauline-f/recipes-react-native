import React from 'react';
import { Wrapper, Title, Ingredient } from './RecipeIngredients.styles';
import { FlatList } from 'react-native';
import recipes from '../../recipes';

export default RecipeIngredients = ({ recipe }) => {
  return (
    <Wrapper>
      <Title>{recipes.informations.ingredients}</Title>
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
