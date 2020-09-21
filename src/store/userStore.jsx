import create from 'zustand';
import axios from 'axios';

const api = 'http://localhost:4000/user';

export const useUser = create((set) => ({
	token: null,
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

				return { status: true, error: null };
			}
		} catch (error) {
			console.log('userStore.signup.error', error);
			return { status: false, error: 'username or email already exist' };
		}

		return { status: false, error: 'username or email already exist' };
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
				localStorage.setItem('user', JSON.stringify(payload));
				localStorage.setItem('token', token);

				return { status: true, error: null };
			}
		} catch (error) {
			console.log('userStore.signin.error', error);
			return { status: false, error: 'Bad credentials' };
		}
		return { status: false, error: 'Bad credentials' };
	},
	signout: () => {
		set({ user: null, token: null });
		localStorage.removeItem('user');
		localStorage.removeItem('token');
	},
	getLocalUser: () => {
		const user = JSON.parse(localStorage.getItem('user'));
		const token = localStorage.getItem('token');
		console.log('localuser:', user, token);
		if (!user || !token) {
			return;
		}

		set({ user, token });
	}
}));
