import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import EditTodo from '../EditTodo';
import { useState } from 'react/cjs/react.development';
import { deleteById } from '../../services/api';
import { Container } from './styled'


export default function ToDo({ todo }) {
	const { title, description, author, _id } = todo;
	const [editTodo, setEditTodo] = useState(false);


	const deleteTodo = async (id) => {
		await deleteById(id);
	};

	return (
		<Container>
			<p className="todoTitle">{ title.toUpperCase() }</p>
			<div>
				<button onClick={() => setEditTodo(true)}>
					<FontAwesomeIcon icon={faEdit} />
				</button>
				<button onClick={() => deleteTodo(_id)}>
					<FontAwesomeIcon icon={faTrash} />
				</button>
			</div>
			{ editTodo	? <EditTodo setOut={() => setEditTodo(false)} id={_id} /> : null }
			{/* <p>{ description }</p>
			<small>{ author }</small> */}
		</Container>
	)
}
