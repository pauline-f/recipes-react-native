import React from 'react';
import { Wrapper, Title, Instruction } from './RecipeInstructions.styles';
import { FlatList } from 'react-native';

export default RecipeInstructions = ({ recipe }) => {
  return (
    <Wrapper>
      <Title>Instructions</Title>
      <FlatList
        data={recipe.instructions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={itemData => (
          <Instruction>{itemData.item}</Instruction>
        )}>
      </FlatList>
    </Wrapper>
  );
}
