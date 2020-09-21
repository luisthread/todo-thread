import React from 'react';
import { Col, Row, Typography, Button, Space } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Home = () => {
	return (
		<Row>
			<Col xs={24} style={{ textAlign: 'center', marginTop: '1rem' }}>
				<Title>Todo Thread</Title>

				<Title level={3}>Your todos in one place</Title>
				<br />
				<Space>
					<Button icon={<GithubOutlined />} href="https://github.com/luisthread">
						luisthread
					</Button>
					<Button type="primary">
						<Link to="/signup">Get Started</Link>
					</Button>
				</Space>
			</Col>
		</Row>
	);
};

export default Home;
