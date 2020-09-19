import React from 'react';
import { Row, Col, Card } from 'antd';
import SigninForm from '../components/SigninForm';

const Signin = () => {
	return (
		<Row justify="center">
			<Col span={6}>
				<Card title="Welcome back!">
					<SigninForm />
				</Card>
			</Col>
		</Row>
	);
};

export default Signin;
