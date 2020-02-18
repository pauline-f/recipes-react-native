import React from 'react';
import { Wrapper, Title, Instruction } from './RecipeInstructions.styles';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';


export default RecipeInstructions = ({ recipe }) => {
  const informations = useSelector(state => state.recipes.informations);
  return (
    <Wrapper>
      <Title>{informations.instructions}</Title>
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
