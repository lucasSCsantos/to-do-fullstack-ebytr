import axios from 'axios';

const URL = "https://secure-journey-62670.herokuapp.com/todos"

const getAll = async () => {
	return axios.get(URL)
		.then(r => r.data.todos);
}

export { getAll };