import React, { useState } from 'react';
import { Card, Typography } from 'antd';
import Todo from './Todo';
import TodoFilter from './TodoFilter';
const { Title } = Typography;

const TodoList = () => {
	const [ todos, setTodos ] = useState([
		{
			id: 'a',
			text: 'my first todo'
		},
		{
			id: 'b',
			text: 'my second todo'
		},
		{
			id: 'b',
			text: 'my third todo'
		}
	]);

	return (
		<Card title="My Todos" extra={<TodoFilter />}>
			{todos.length ? (
				todos.map((todo) => <Todo todo={todo} />)
			) : (
				<Title level={5}>Empty</Title>
			)}
		</Card>
	);
};

export default TodoList;
