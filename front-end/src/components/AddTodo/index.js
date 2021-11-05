import React from 'react'
import { useState } from 'react/cjs/react.development'
import { Container, Modal } from './styled'

export default function AddTodo({ setOut }) {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [description, setDescription] = useState("");

	return (
		<Container onClick={setOut}>
			<Modal>
				<form onSubmit={(e) => {}}>
					<input
						type="text"
						name="title"
						placeholder="Título"
						value={title}
						onChange={({ target }) => setTitle(target)}
					/>
					<textarea 
						type="text"
						name="description"
						placeholder="Descrição (opcional)"
						value={description}
						onChange={({ target }) => setDescription(target)}
					/>
					<input
						type="text"
						name="author"
						placeholder="Autor"
						value={author}
						onChange={({ target }) => setAuthor(target)}
					/>
					<button type="submit">
						Adicionar To Do
					</button>
				</form>
			</Modal>
		</Container>
	)
}
