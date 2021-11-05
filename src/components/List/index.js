import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import ToDo from '../ToDo';
import AddTodo from '../AddTodo';
import { Container, Top } from './styled';
import { getAll } from '../../services/api';

export default function List({ type, title }) {
	const [todosList, setTodosList] = useState([]);
	const [addTodo, setAddTodo] = useState(false);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const getAllTodos = async () => {
			const toDoList = await getAll();
			setTodos(toDoList);
		}
		getAllTodos();
	}, [addTodo])
	
	useEffect(() => {
		const newList = todos.filter((todo) => todo.status === type);
		setTodosList(newList);
	}, [todos, type]);
	
	return (
		<Container>
			<Top>
				<h1>{ title }</h1>
				<button onClick={() => {setAddTodo(!addTodo)}}>
					<FontAwesomeIcon icon={faPlus} size="2x"/>
				</button>
				{ addTodo	? <AddTodo setOut={() => setAddTodo(false)} status={ type } /> : null }
			</Top>
			{ todosList.map((todo, index) => (
				<ToDo key={index} todo={todo}/>
			))}
		</Container>
	)
}
