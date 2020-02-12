import React from 'react';
import { Container } from './App.styles';
import Header from './components/Header';
import RecipesList from './components/RecipesList/RecipesList';

export default App = () => {
  return (
    <Container>
      <Header />
      <RecipesList />
    </Container>
  );
}
