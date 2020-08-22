import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main'
import { BrowserRouter as Router } from 'react-router-dom';
import { StyledContainer } from './styles/StyledContainer'

const App = () => (
	<Router>
		<StyledContainer>
			<Navbar />
			<Main />
		</StyledContainer>
	</Router>
)

export default App;
