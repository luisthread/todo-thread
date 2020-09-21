import React from 'react';
import { Row, Col, Card } from 'antd';
import SignupForm from '../components/SignupForm';

const Signup = () => {
	return (
		<Row justify="center">
			<Col xs={22} sm={14} md={12} lg={8}>
				<Card title="Create a new account" style={{ marginTop: '1rem' }}>
					<SignupForm />
				</Card>
			</Col>
		</Row>
	);
};

export default Signup;
