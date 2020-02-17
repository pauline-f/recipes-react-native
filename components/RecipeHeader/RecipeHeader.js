import React from 'react';
import { Img, WrapperHeaderText, WrapperText, Wrapper, HeaderTitle, HeaderValue } from './RecipeHeader.styles';
import { Button, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

export default RecipeHeader = ({ recipe, toggleIngredientsListHandler }) => {
  const informations = useSelector(state => state.recipes.informations);
  return (
    <Wrapper>
      <Img source={recipe.image} />
      <WrapperHeaderText>
        <WrapperText>
          <HeaderTitle>{informations.servings}</HeaderTitle>
          <HeaderValue>{recipe.servings}</HeaderValue>
        </WrapperText>
        <WrapperText>
          <HeaderTitle>{informations.preparationTime}</HeaderTitle>
          <HeaderValue>{recipe.preparationTime}</HeaderValue>
        </WrapperText>
        <WrapperText>
          <HeaderTitle>{informations.season}</HeaderTitle>
          <HeaderValue>{recipe.season}</HeaderValue>
        </WrapperText>
        <TouchableOpacity style={{paddingRight: 10}}><Button color='#43a047' title={informations.add} onPress={toggleIngredientsListHandler} /></TouchableOpacity>
      </WrapperHeaderText>
    </Wrapper>
  );
}
