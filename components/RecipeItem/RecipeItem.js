import React from 'react';
import { Wrapper, Img, Title } from './RecipeItem.styles';

export default RecipeItem = ({ recipe }) => {
  return (
    <Wrapper>
      <Img source={recipe.image} />
      <Title>{recipe.name}</Title>
    </Wrapper>
  );
}
