import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { create } from '../../services/api';
import { Container, Modal } from './styled'

export default function AddTodo({ setOut, status }) {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [description, setDescription] = useState("");

	return (
		<Container>
			<Modal>
				<form onSubmit={(e) => {
						setOut();
						create({
							title,
							description,
							author,
							status
						});
					}}>
					<input
						type="text"
						name="title"
						placeholder="Título"
						value={title}
						onChange={({ target }) => setTitle(target.value)}
					/>
					<textarea 
						type="text"
						name="description"
						placeholder="Descrição (opcional)"
						value={description}
						onChange={({ target }) => setDescription(target.value)}
					/>
					<input
						type="text"
						name="author"
						placeholder="Autor"
						value={author}
						onChange={({ target }) => setAuthor(target.value)}
					/>
					<button type="submit">
						Adicionar To Do
					</button>
				</form>
			</Modal>
		</Container>
	)
}
