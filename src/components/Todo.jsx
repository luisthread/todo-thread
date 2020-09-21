import { Button, Checkbox, Space, Typography } from 'antd';
import React from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useTodos } from '../store/todosStore';
import shallow from 'zustand/shallow';

const { Text } = Typography;

const Todo = ({ todo, userId, token, setIsEditing, changeCompletedTodo }) => {
	const [ completeTodo, deleteTodo ] = useTodos(
		(state) => [ state.completeTodo, state.deleteTodo ],
		shallow
	);
	const deleteATodo = async () => {
		console.log(userId, todo.id, token);
		await deleteTodo(userId, todo.id, token);
	};
	const updateATodo = () => {
		setIsEditing(todo);
	};
	const completeATodo = async (ev) => {
		await completeTodo(ev.target.checked, userId, todo.id, token);
		changeCompletedTodo(`${todo.id}${ev.target.checked}`);
	};

	return (
		<div style={{ margin: '.5rem 0', display: 'flex', justifyContent: 'space-between' }}>
			<Text delete={todo.completed}>{todo.text}</Text>
			<Space>
				<Button size="small" icon={<EditOutlined />} onClick={updateATodo} />
				<Button size="small" icon={<DeleteOutlined />} onClick={deleteATodo} />
				<Checkbox checked={todo.completed} onChange={completeATodo} />
			</Space>
		</div>
	);
};

export default Todo;
