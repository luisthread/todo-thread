import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Input } from 'antd';
import { useTodos } from '../store/todosStore';
import shallow from 'zustand/shallow';

const TodoForm = ({ userId, token, isEditing, setIsEditing }) => {
	const [ addNewTodo, updateTodo ] = useTodos(
		(state) => [ state.addNewTodo, state.updateTodo ],
		shallow
	);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ text, setText ] = useState(null);

	useEffect(
		() => {
			setText(isEditing ? isEditing.text : '');
		},
		[ isEditing ]
	);

	const saveTodo = async (values) => {
		setIsLoading(true);

		const todo = { text: values.text, userId, completed: false };
		await addNewTodo(todo, token);

		setText('');
		setIsLoading(false);
	};

	const updateATodo = async (values) => {
		setIsLoading(true);
		await updateTodo(values.text, userId, isEditing.id, token);
		setIsEditing(null);
		setIsLoading(false);
	};

	return (
		<Card title={isEditing ? 'Updating todo' : 'Create new todo'}>
			<Form onFinish={isEditing ? updateATodo : saveTodo}>
				<Form.Item
					name="text"
					label="Todo"
					rules={[
						{
							required: true,
							message: 'Please input a todo'
						}
					]}
				>
					<Input value={text} onChange={(e) => setText(e.target.value)} />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" loading={isLoading}>
						{isEditing ? 'Update' : 'Add'}
					</Button>
				</Form.Item>
			</Form>
		</Card>
	);
};

export default TodoForm;
