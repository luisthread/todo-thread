import React from 'react';
import { Radio } from 'antd';

const TodoFilter = () => {
	const onChange = (ev) => {
		// TODO zustand, value in radio.group
		console.log(ev.target.value);
	};

	return (
		<Radio.Group onChange={onChange} value={1}>
			<Radio value={1}>All</Radio>
			<Radio value={2}>Uncompleted</Radio>
			<Radio value={3}>Completed</Radio>
		</Radio.Group>
	);
};

export default TodoFilter;
