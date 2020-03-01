import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Title, Ingredient } from './Ingredients.styles';

export default Ingredients = () => {
  const recipesAdded = useSelector(state => state.recipes.ingredientsList);
  const informations = useSelector(state => state.recipes.informations);

  const [ingredients, setIngredients] = useState([]);

  const addIngredients = () => {
    recipesAdded.map(recipe => {
      recipe.ingredients.map(i => setIngredients(ingredients => [...ingredients, i.name]));
    });
  }

  useEffect(() => {
    addIngredients();
  }, [recipesAdded]);

  return (
    <View>
      <Title>{informations.ingredients}</Title>
      <FlatList
        data={ingredients}
        renderItem={itemData => (
          <Ingredient>{itemData.item}</Ingredient>
        )}>
      </FlatList>
    </View>
  );
}
