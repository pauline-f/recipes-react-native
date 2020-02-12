import React from 'react';
import {  } from './RecipeItem.styles';
import { View, Image, Text } from 'react-native';

export default RecipeItem = ({name, image}) => {
  return (
    <View>
      <Image source={image}  style={{width: 40, height: 40, borderColor: 'green', borderWidth: 2}}  />
      <Text>{name}</Text>
    </View>
  );
}
