import React from 'react';
import { useState } from 'react/cjs/react.development';
import { update } from '../../services/api';
import { Container, Modal } from './styled';

export default function EditTodo({ setOut, id }) {
	const [title, setTitle] = useState("");
	const [status, setStatus] = useState("");
	const [description, setDescription] = useState("");

	return (
		<Container>
			<Modal>
				<form onSubmit={(e) => {
						setOut();
						update(id, {
							title,
							status,
							description,
						})
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
						name="status"
						placeholder="Status"
						value={status}
						onChange={({ target }) => setStatus(target.value)}
					/>
					<button type="submit">
						Editar To Do
					</button>
				</form>
			</Modal>
		</Container>
	)
}
