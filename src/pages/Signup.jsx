import React from 'react';
import { Row, Col, Card } from 'antd';
import SignupForm from '../components/SignupForm';

const Signup = () => {
	return (
		<Row justify="center">
			<Col span={6}>
				<Card title="Create a new account">
					<SignupForm />
				</Card>
			</Col>
		</Row>
	);
};

export default Signup;
