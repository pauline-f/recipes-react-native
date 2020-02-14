import React from 'react';
import { Wrapper, Title, Instruction } from './RecipeInstructions.styles';
import { FlatList } from 'react-native';
import recipes from '../../recipes';


export default RecipeInstructions = ({ recipe }) => {
  return (
    <Wrapper>
      <Title>{recipes.informations.instructions}</Title>
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
