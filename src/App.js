import React from 'react';
import { StyledFlexContainer } from './styles/Container';
import { StyledMain } from './styles/Main';
import { StyledNavigation } from './styles/Navigation';
import './App.css';

const App = () => {
	return (
    <StyledFlexContainer>
      <StyledNavigation>Sidebar</StyledNavigation>
      <StyledMain>Main Contents</StyledMain>
    </StyledFlexContainer>
  )
}

export default App;
