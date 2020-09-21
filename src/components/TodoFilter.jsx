import React from 'react';
import { Radio } from 'antd';

const TodoFilter = ({ filter, setFilter }) => {
	const onChange = (ev) => {
		setFilter(ev.target.value);
	};

	return (
		<Radio.Group onChange={onChange} value={filter}>
			<Radio value={1}>All</Radio>
			<Radio value={2}>Uncompleted</Radio>
			<Radio value={3}>Completed</Radio>
		</Radio.Group>
	);
};

export default TodoFilter;
