import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useUser } from '../store/userStore';
import { Redirect } from 'react-router-dom';

const SignupForm = () => {
	const signup = useUser((state) => state.signup);
	const [ isLogged, setIsLogged ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);

	const onFinish = async (values) => {
		setIsLoading(true);
		const logged = await signup(values);
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
				name="name"
				label="Name"
				rules={[
					{
						required: true,
						message: 'Please input your name'
					}
				]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="username"
				label="Username"
				rules={[
					{
						required: true,
						message: 'Please input your username'
					},
					{
						min: 5,
						message: 'Your username should have at least five characters'
					}
				]}
				hasFeedback
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="email"
				label="E-mail"
				rules={[
					{
						type: 'email',
						message: "The input isn't valid E-mail"
					},
					{
						required: true,
						message: 'Please input your E-mail'
					}
				]}
				hasFeedback
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="password"
				label="Pssword"
				rules={[
					{
						required: true,
						message: 'Please input your password'
					},
					{
						min: 8,
						message: 'Your password should have at least eight characters'
					}
				]}
				hasFeedback
			>
				<Input.Password />
			</Form.Item>
			<Form.Item
				name="confirm"
				label="Confirm Password"
				dependencies={[ 'password' ]}
				rules={[
					{
						required: true,
						message: 'Please confirm your password'
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve();
							}

							return Promise.reject("The passwords don't match");
						}
					})
				]}
				hasFeedback
			>
				<Input.Password />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit" loading={isLoading}>
					Create account
				</Button>
			</Form.Item>
			{error && <p>{error}</p>}
		</Form>
	);
};

export default SignupForm;
