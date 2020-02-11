import React from 'react';
import { Wrapper, Title, Logo } from './Header.styles';

export default Header = () => {
  return (
      <Wrapper>
        <Logo source={require('../../images/logo.jpg')} />
        <Title>Vegetarian recipes</Title>
      </Wrapper>
  );
}
