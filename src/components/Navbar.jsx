import React, { Fragment } from 'react';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useUser } from '../store/userStore';

const Navbar = () => {
	const token = useUser((state) => state.token);
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
					<Button type="primary">Signout</Button>
				</Fragment>
			) : (
				<Fragment>
					<Menu.Item key="signin">
						<Link to="/signin">Signin</Link>
					</Menu.Item>
					<Menu.Item key="signup">
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
