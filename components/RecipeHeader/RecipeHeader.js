import React from 'react';
import { Img, WrapperHeaderText, WrapperText, Wrapper, HeaderTitle, HeaderValue } from './RecipeHeader.styles';
import recipes from '../../recipes';

export default RecipeHeader = ({ recipe }) => {
  return (
    <Wrapper>
      <Img source={recipe.image} />
      <WrapperHeaderText>
        <WrapperText>
          <HeaderTitle>{recipes.informations.servings}</HeaderTitle>
          <HeaderValue>{recipe.servings}</HeaderValue>
        </WrapperText>
        <WrapperText>
          <HeaderTitle>{recipes.informations.preparationTime}</HeaderTitle>
          <HeaderValue>{recipe.preparationTime}</HeaderValue>
        </WrapperText>
        <WrapperText>
          <HeaderTitle>{recipes.informations.season}</HeaderTitle>
          <HeaderValue>{recipe.season}</HeaderValue>
        </WrapperText>
      </WrapperHeaderText>
    </Wrapper>
  );
}
