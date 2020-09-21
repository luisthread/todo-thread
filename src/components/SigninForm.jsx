import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Redirect } from 'react-router-dom';
import { useUser } from '../store/userStore';

const SigninForm = () => {
	const signin = useUser((state) => state.signin);
	const [ isLogged, setIsLogged ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);

	const onFinish = async (values) => {
		setIsLoading(true);
		const logged = await signin(values);
		console.log(logged);
		setIsLogged(logged.status);
		setError(logged.error);
		setIsLoading(false);
	};

	if (isLogged) {
		return <Redirect to="/dash" />;
	}

	return (
		<Form onFinish={onFinish}>
			<Form.Item
				name="username"
				label="Username"
				rules={[
					{
						required: true,
						message: 'Please input your username'
					}
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="password"
				label="Password"
				rules={[
					{
						required: true,
						message: 'Please input your password'
					}
				]}
			>
				<Input.Password />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit" loading={isLoading}>
					Signin
				</Button>
			</Form.Item>
			{error && <p>{error}</p>}
		</Form>
	);
};

export default SigninForm;
