import React from 'react';
import { Wrapper, Img, Title } from './RecipeItem.styles';
import { TouchableOpacity } from 'react-native';
import RecipePresentation from '../RecipeDetails/RecipeDetails';

export default RecipeItem = ({ recipe }) => {
  return (
    <TouchableOpacity onPress={() => <RecipePresentation />}>
      <Wrapper>
        <Img source={recipe.image} />
        <Title>{recipe.name}</Title>
      </Wrapper>
    </TouchableOpacity>
  );
}
