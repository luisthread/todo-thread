import React from 'react';
import { Row, Col, Card } from 'antd';
import SigninForm from '../components/SigninForm';

const Signin = () => {
	return (
		<Row justify="center">
			<Col xs={22} sm={14} md={12} lg={8}>
				<Card title="Welcome back!" style={{ marginTop: '1rem' }}>
					<SigninForm />
				</Card>
			</Col>
		</Row>
	);
};

export default Signin;
