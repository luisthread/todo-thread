import create from 'zustand';
import axios from 'axios';

const api = 'http://localhost:4000/user';

export const useUser = create((set) => ({
	token: 'token',
	user: null,
	signup: async (values) => {
		try {
			const { name, username, email, password } = values;
			const response = await axios.post(`${api}/signup`, {
				name,
				username,
				email,
				password
			});
			const { auth, token, payload } = response.data;
			if (auth) {
				set({ user: payload, token });
				localStorage.setItem('user', JSON.stringify(payload));
				localStorage.setItem('token', JSON.stringify(token));
			}
		} catch (error) {
			console.log('userStore.signup.error', error);
		}
	},
	signin: async (values) => {
		try {
			const { username, password } = values;
			const response = await axios.post(`${api}/signin`, {
				username,
				password
			});
			const { auth, token, payload } = response.data;
			if (auth) {
				set({ user: payload, token });
			}
		} catch (error) {
			console.log('userStore.signin.error', error);
		}
	},
	signout: () => {
		set({ user: null, token: null });
		localStorage.removeItem('user');
		localStorage.removeItem('token');
	}
}));
