import React from 'react';
import { StyledFlexLayout } from './styles/Layout';
import { StyledMain } from './styles/Main';
import './App.css';
import Closet from './pages/Closet';
import Navigation from './components/Navigation';

const App = () => {
	return (
    <StyledFlexLayout>
      <Navigation />
      <StyledMain>
        <Closet />
      </StyledMain>
    </StyledFlexLayout>
  )
}

export default App;
