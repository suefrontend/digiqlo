import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	Link
} from 'react-router-dom';
import Closet from '../Closet';
import Reports from '../Reports';
import Organize from '../Organize';
import Wishlist from '../Wishlist';
import AddItem from '../AddItem';
import Detail from '../Detail';
import StyledMain from '../styles/StyledMain'

const Main = () => (
	<StyledMain>
		<Switch>
			<Route exact path="/additem" component={AddItem} />
			<Route exact path="/closet" component={Closet} />
			<Route exact path="/closet/:id" component={Detail} />
			<Route exact path="/reports" component={Reports} />
			<Route exact path="/organize" component={Organize} />
			<Route exact path="/wishlist" component={Wishlist} />
			<Redirect exact from="/closet/:id" to="/closet" />
		</Switch>
	</StyledMain>
);

export default Main;
