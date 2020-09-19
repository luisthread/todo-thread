import React from 'react';
import { Form, Input, Button } from 'antd';

const SignupForm = () => {
	const onFinish = (values) => {
		// TODO: create new user...
		alert(values);
	};

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
						message: 'Please input yout password'
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

							return Promise.reject("The two passwords don't match");
						}
					})
				]}
				hasFeedback
			>
				<Input.Password />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Create account
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SignupForm;
