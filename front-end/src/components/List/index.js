import React, { useEffect, useState } from 'react'
import ToDo from '../ToDo';
import { Container } from './styled';

export default function List({ todos, type, title }) {
	const [todosList, setTodosList] = useState([]);
	
	useEffect(() => {
		const newList = todos.filter((todo) => todo.status === type);
		setTodosList(newList);
	}, [todos, type])

	// const title = type === "pending" 
	// 	? 'Pendente' 
	// 		: type === "in progress" 
	// 			? 'Em progresso' : "Feito";
	
	return (
		<Container>
			<h1>{ title }</h1>
			{todosList.map((todo, index) => (
				<ToDo key={index} todo={todo}/>
			))}
		</Container>
	)
}
