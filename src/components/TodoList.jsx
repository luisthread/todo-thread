import React, { useState } from 'react';
import { Card, Typography } from 'antd';
import Todo from './Todo';
import TodoFilter from './TodoFilter';
const { Title } = Typography;

const TodoList = ({ todos, userId, token, setIsEditing, changeCompletedTodo }) => {
	const [ filter, setFilter ] = useState(1);
	return (
		<Card title="Todos" extra={<TodoFilter filter={filter} setFilter={setFilter} />}>
			{todos.length ? (
				todos
					.filter((todo) => {
						let current = todo;
						if (filter === 1) {
							current = todo;
						}

						if (filter === 2) {
							current = todo.completed ? null : todo;
						}

						if (filter === 3) {
							current = todo.completed ? todo : null;
						}

						return current;
					})
					.map((todo) => (
						<Todo
							key={todo.id}
							todo={todo}
							userId={userId}
							token={token}
							setIsEditing={setIsEditing}
							changeCompletedTodo={changeCompletedTodo}
						/>
					))
			) : (
				<Title level={5}>Empty</Title>
			)}
		</Card>
	);
};

export default TodoList;
