import React from 'react';
import { Wrapper, Title, Instruction } from './RecipeInstructions.styles';
import { FlatList } from 'react-native';

export default RecipeInstructions = ({ recipe }) => {
  return (
    <Wrapper>
      <Title>Instructions</Title>
      <FlatList
        data={recipe.instructions}
        renderItem={itemData => (
          <Instruction>{itemData.item}</Instruction>
        )}>
      </FlatList>
    </Wrapper>
  );
}
