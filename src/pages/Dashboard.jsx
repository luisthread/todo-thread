import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { useTodos } from '../store/todosStore';
import { useUser } from '../store/userStore';
import shallow from 'zustand/shallow';

const Dashboard = () => {
	const [ user, token ] = useUser((state) => [ state.user, state.token ], shallow);
	const todos = useTodos((state) => state.todos, shallow);
	const getUserTodos = useTodos((state) => state.getUserTodos, shallow);
	useEffect(
		() => {
			async function getTodos() {
				await getUserTodos(user.id, token);
			}

			getTodos();
		},
		[ getUserTodos, user, token ]
	);
	return (
		<Row justify="space-between">
			<Col span={8}>
				<TodoForm userId={user.id} token={token} />
			</Col>
			<Col span={15}>
				<TodoList todos={todos} />
			</Col>
		</Row>
	);
};

export default Dashboard;
