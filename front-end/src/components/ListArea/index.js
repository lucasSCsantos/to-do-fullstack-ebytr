import React, { useEffect, useState } from 'react';
import { getAll } from '../../services/api';
import List from '../List';
import { Container, ListsContainer } from './styled';

export default function ListsArea() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const getAllTodos = async () => {
			const toDoList = await getAll();
			setTodos(toDoList);
		}
		getAllTodos();
	}, [])


	return (
		<Container>
			<h1>ToDo List EBYTR</h1>
			<ListsContainer>
				<List todos={todos} type={"pending"} title={"Pendente"} />
				<List todos={todos} type={"in progress"} title={"Em progresso"} />
				<List todos={todos} type={"ready"} title={"Feito"}/>
			</ListsContainer>
		</Container>
	)
}
