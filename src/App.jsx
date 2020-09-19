import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import { useUser } from './store/userStore';

const App = () => {
	const token = useUser((state) => state.token);
	const Routes = () => (
		<Fragment>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route
				path="/signup"
				render={({ location }) =>
					!token ? (
						<Signup />
					) : (
						<Redirect
							to={{
								pathname: '/dash',
								state: { from: location }
							}}
						/>
					)}
			/>
			<Route
				path="/signin"
				render={({ location }) =>
					!token ? (
						<Signin />
					) : (
						<Redirect
							to={{
								pathname: '/dash',
								state: { from: location }
							}}
						/>
					)}
			/>
			<Route path="/dash" render={() => (token ? <Dashboard /> : <Redirect to="/home" />)} />
		</Fragment>
	);

	return (
		<div id="App">
			<Navbar />
			<Routes />
		</div>
	);
};

export default App;
