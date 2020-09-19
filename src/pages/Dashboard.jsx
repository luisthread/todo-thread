import React from 'react';
import { Col, Row } from 'antd';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const Dashboard = () => {
	return (
		<Row justify="space-between">
			<Col span={8}>
				<TodoForm />
			</Col>
			<Col span={15}>
				<TodoList />
			</Col>
		</Row>
	);
};

export default Dashboard;
