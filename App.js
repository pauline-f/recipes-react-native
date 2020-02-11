import React from 'react';
import { Container, Wrapper, Title, Logo } from './App.styles';

export default App = () => {
  return (
    <Container>
      <Wrapper>
        <Logo source={require('./images/logo.jpg')} />
        <Title>Vegetarian recipes</Title>
      </Wrapper>
    </Container>
  );
}
