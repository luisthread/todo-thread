import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { useTodos } from '../store/todosStore';
import { useUser } from '../store/userStore';
import shallow from 'zustand/shallow';

const Dashboard = () => {
	const [ user, token ] = useUser((state) => [ state.user, state.token ], shallow);
	const [ isEditing, setIsEditing ] = useState(null);
	const [ completedTodo, changeCompletedTodo ] = useState(null);
	const todos = useTodos((state) => state.todos, shallow);
	const getUserTodos = useTodos((state) => state.getUserTodos, shallow);
	useEffect(
		() => {
			async function getTodos() {
				await getUserTodos(user.id, token);
			}

			getTodos();
		},
		[ isEditing, completedTodo, getUserTodos, user, token ]
	);
	return (
		<Row justify="space-between">
			<Col xs={24} sm={10} md={8} lg={8} style={{ paddingTop: '1rem' }}>
				<TodoForm
					userId={user.id}
					token={token}
					isEditing={isEditing}
					setIsEditing={setIsEditing}
				/>
			</Col>
			<Col xs={24} sm={12} md={16} lg={16} style={{ paddingTop: '1rem' }}>
				<TodoList
					todos={todos}
					userId={user.id}
					token={token}
					setIsEditing={setIsEditing}
					changeCompletedTodo={changeCompletedTodo}
				/>
			</Col>
		</Row>
	);
};

export default Dashboard;
