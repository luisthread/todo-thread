import create from 'zustand';
import axios from 'axios';
const api = 'http://192.168.0.5:4000/todo';

export const useTodos = create((set, get) => ({
	todos: [],
	getUserTodos: async (userId, token) => {
		try {
			const options = {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json'
				}
			};

			const response = await fetch(`${api}/${userId}`, options);
			const data = await response.json();
			const { status, payload } = data;
			if (status === 200) {
				set({ todos: payload });
			}
		} catch (error) {
			set({ todos: [] });
		}
	},
	addNewTodo: async (todo, token) => {
		try {
			const body = {
				...todo
			};
			const opts = {
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				}
			};

			const response = await axios.post(`${api}`, body, opts);
			const { status } = response.data;
			if (status === 200) {
				await get().getUserTodos(todo.userId, token);
				return true;
			}
		} catch (error) {
			return false;
		}
	},
	completeTodo: async (completed, userId, id, token) => {
		try {
			const body = {
				id,
				userId,
				completed
			};
			const opts = {
				headers: {
					Authorization: `Bearer ${token}`
				}
			};
			const response = await axios.patch(api, body, opts);
			const { auth } = response.data;
			if (auth === 200) {
				console.log('complete success');
				await get().getUserTodos(userId, token);
				return true;
			}

			return false;
		} catch (error) {
			return false;
		}
	},
	updateTodo: async (text, userId, id, token) => {
		try {
			const body = {
				id,
				userId,
				text
			};
			const opts = {
				headers: {
					Authorization: `Bearer ${token}`
				}
			};
			const response = await axios.patch(api, body, opts);
			const { auth } = response.data;
			if (auth === 200) {
				console.log('updated success');
				await get().getUserTodos(userId, token);
				return true;
			}

			return false;
		} catch (error) {
			return false;
		}
	}
}));
