import React from 'react';
import { Wrapper, Img, Title } from './RecipeItem.styles';
import { View, Image, Text } from 'react-native';

export default RecipeItem = ({name, image}) => {
  return (
    <Wrapper>
      <Img source={image} />
      <Title>{name}</Title>
    </Wrapper>
  );
}
