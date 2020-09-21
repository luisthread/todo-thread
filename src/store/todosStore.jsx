import create from 'zustand';
import axios from 'axios';
const api = process.env.REACT_APP_SERVER_API;

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

			const response = await fetch(`${api}/todo/${userId}`, options);
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

			const response = await axios.post(`${api}/todo`, body, opts);
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
			const response = await axios.patch(`${api}/todo`, body, opts);
			const { status } = response.data;
			if (status === 200) {
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
			const response = await axios.patch(`${api}/todo`, body, opts);
			const { status } = response.data;
			if (status === 200) {
				console.log('updated success');
				await get().getUserTodos(userId, token);
				return true;
			}

			return false;
		} catch (error) {
			return false;
		}
	},
	deleteTodo: async (userId, id, token) => {
		try {
			const opts = {
				headers: {
					Authorization: `Bearer ${token}`
				}
			};
			const response = await axios.delete(`${api}/todo/${userId}/${id}`, opts);
			const { status } = response.data;
			if (status === 200) {
				console.log('delete success');
				await get().getUserTodos(userId, token);
				return true;
			}
			return false;
		} catch (error) {
			console.log('errrrooooorrr', error);
			return false;
		}
	},
	validateToken: async (token) => {
		try {
			const url = `${api}/user/token`;
			const opts = {
				headers: {
					Authorization: `Bearer ${token}`
				}
			};
			const response = await axios.get(url, opts);

			return response.data.status === 200;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}));
