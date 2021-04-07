import React from 'react';
import { StyledFlexLayout } from './styles/Layout';
import { StyledMain } from './styles/Main';
import { StyledNavigation } from './styles/Navigation';
import './App.css';
import Closet from './pages/Closet';

const App = () => {
	return (
    <StyledFlexLayout>
      <StyledNavigation>Sidebar</StyledNavigation>
      <StyledMain>
        <Closet />
      </StyledMain>
    </StyledFlexLayout>
  )
}

export default App;
