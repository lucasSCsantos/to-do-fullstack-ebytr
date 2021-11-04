import React, { useEffect, useState } from 'react'
import { getAll } from '../services/api'
import List from './List';

export default function ListsArea() {
	const [pending, setPending] = useState([]);
	const [progress, setProgress] = useState([]);
	const [ready, setReady] = useState([]);


	useEffect(() => {
		const getAllTodos = async () => {
			const toDoList = await getAll();
			toDoList.map((todo) => {
				if (todo.status === 'pending') setPending([ ...pending, todo ]);
				if (todo.status === 'in progress') setProgress([ ...progress, todo ]);
				if (todo.status === 'ready') setReady([ ...ready, todo ]);
				return null;
			});
		}
		getAllTodos();
	}, [])


	return (
		<div>
			<List todos={pending}/>
			<List todos={progress}/>
			<List todos={ready}/>
		</div>
	)
}
