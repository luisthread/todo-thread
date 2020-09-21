import create from 'zustand';
import axios from 'axios';

const api = 'http://192.168.0.5:4000/user';

export const useUser = create((set, get) => ({
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
			return { status: false, error: 'Bad credentials' };
		}
		return { status: false, error: 'Bad credentials' };
	},
	signout: () => {
		set({ user: null, token: null });
		localStorage.removeItem('user');
		localStorage.removeItem('token');
	},
	getLocalUser: async () => {
		try {
			const user = JSON.parse(localStorage.getItem('user'));
			const token = localStorage.getItem('token');
			if (!user || !token) {
				return;
			}

			const opts = {
				headers: {
					Authorization: `Bearer ${token}`
				}
			};

			const response = await axios.get(`${api}/token`, opts);
			console.log(response.data);
			if (response.data.auth === true) {
				set({ user, token });
			} else {
				get().signout();
			}
		} catch (error) {
			console.log(error);
		}
	}
}));
