import axios from 'axios';

const URL = "https://secure-journey-62670.herokuapp.com/todos"

const getAll = async () => {
	return axios.get(URL)
		.then(r => r.data.todos);
}

const create = async (todo) => {
	axios.post(URL, todo)
}

const deleteById = async (id) => {
	axios.delete(`${URL}/${id}`);
}

const update = async (id, todo) => {
	axios.put(`${URL}/${id}`, todo)
}

export { getAll, create, deleteById, update };