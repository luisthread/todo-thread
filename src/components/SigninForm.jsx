import React from 'react';
import { Button, Form, Input } from 'antd';

const SigninForm = () => {
	const onFinish = (values) => {
		alert(values);
	};

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
				<Button type="primary" htmlType="submit">
					Signin
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SigninForm;
