import { Button, Checkbox } from 'antd';
import React from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const Todo = ({ todo }) => {
	const updateTodo = (ev) => {
		console.log('update todo to: ', ev.target.checked);
	};

	return (
		<div>
			{todo.text}
			<div className="actions">
				<Button size="small" icon={<EditOutlined />} />
				<Button size="small" icon={<DeleteOutlined />} />
				<Checkbox onChange={updateTodo}>completed</Checkbox>
			</div>
		</div>
	);
};

export default Todo;
