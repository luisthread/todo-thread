import React from 'react';
import { Button, Card, Form, Input } from 'antd';

const TodoForm = () => {
	return (
		<Card title="New todo">
			<Form>
				<Form.Item>
					<Input />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">
						Add todo
					</Button>
				</Form.Item>
			</Form>
		</Card>
	);
};

export default TodoForm;
