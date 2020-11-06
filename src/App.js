import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import * as S from './styles/Container';
import './App.css';

const App = () => {

	return (
		<S.Container>
      <Navbar />
      <Main />
    </S.Container>
  )
}

export default App;
