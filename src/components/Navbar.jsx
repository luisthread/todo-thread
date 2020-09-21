import React, { Fragment } from 'react';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useUser } from '../store/userStore';

const Navbar = () => {
	const token = useUser((state) => state.token);
	const signout = useUser((state) => state.signout);

	const handleSignout = () => {
		signout();
	};

	return (
		<Menu mode="horizontal">
			<Menu.Item key="home">
				<Link to="/">Home</Link>
			</Menu.Item>
			{token ? (
				<Fragment>
					<Menu.Item key="dashboard">
						<Link to="/dash">Dashboard</Link>
					</Menu.Item>
					<Button type="primary" onClick={handleSignout}>
						Signout
					</Button>
				</Fragment>
			) : (
				<Fragment>
					<Menu.Item key="signin">
						<Link to="/signin">Signin</Link>
					</Menu.Item>
					<Menu.Item key="singup">
						<Button type="primary">
							<Link to="/signup">Signup</Link>
						</Button>
					</Menu.Item>
				</Fragment>
			)}
		</Menu>
	);
};

export default Navbar;
