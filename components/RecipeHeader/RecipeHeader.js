import React from 'react';
import { Img, WrapperHeaderText, WrapperText, Wrapper, HeaderTitle, HeaderValue } from './RecipeHeader.styles';

export default RecipeHeader = ({ recipe }) => {
  return (
    <Wrapper>
      <Img source={recipe.image} />
      <WrapperHeaderText>
        <WrapperText>
          <HeaderTitle>Servings: </HeaderTitle>
          <HeaderValue>{recipe.servings}</HeaderValue>
        </WrapperText>
        <WrapperText>
          <HeaderTitle>Time: </HeaderTitle>
          <HeaderValue>{recipe.preparationTime}</HeaderValue>
        </WrapperText>
        <WrapperText>
          <HeaderTitle>Season: </HeaderTitle>
          <HeaderValue>{recipe.season}</HeaderValue>
        </WrapperText>
      </WrapperHeaderText>
    </Wrapper>
  );
}
