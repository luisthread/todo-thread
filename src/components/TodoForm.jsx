import React, { useState } from 'react';
import { Button, Card, Form, Input } from 'antd';
import { useTodos } from '../store/todosStore';

const TodoForm = ({ userId, token }) => {
	const addNewTodo = useTodos((state) => state.addNewTodo);
	const [ saved, setSaved ] = useState(true);
	const [ isLoading, setIsLoading ] = useState(false);

	const onFinish = async (values) => {
		setIsLoading(true);
		setSaved(true);
		const todo = { text: values.text, userId, completed: false };
		const isSaved = await addNewTodo(todo, token);
		setSaved(isSaved);
		setIsLoading(false);
	};

	return (
		<Card title="New todo">
			<Form onFinish={onFinish}>
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
					<Input />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" loading={isLoading}>
						Add todo
					</Button>
				</Form.Item>
				{!saved && <p>Todo save failed!</p>}
			</Form>
		</Card>
	);
};

export default TodoForm;
