import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.classify.ml',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default instance;
