import React from 'react';
import { Col, Row, Typography } from 'antd';

const { Title, Text } = Typography;

const Home = () => {
	return (
		<Row>
			<Col xs={24} style={{ textAlign: 'center', marginTop: '1rem' }}>
				<Title>Todo Thread</Title>
				<Text>Your todos in one place</Text>
			</Col>
		</Row>
	);
};

export default Home;
