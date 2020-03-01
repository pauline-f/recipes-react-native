import React from 'react';
import { Wrapper, Img, Title, WrapperTitleButton } from './IngredientsRecipeItem.styles';
import { Button } from 'react-native';
import { useSelector } from 'react-redux';

export default IngredientsRecipeItem = ({ recipe }) => {

  const informations = useSelector(state => state.recipes.informations);
  return (
    <Wrapper>
      <Img source={recipe.image} >
        <WrapperTitleButton>
          <Title>{recipe.name}</Title>
        </WrapperTitleButton>
      </Img>
    </Wrapper>
  );
}
