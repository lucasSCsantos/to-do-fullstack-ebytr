import React, { useEffect, useState } from 'react';
import { getAll } from '../../services/api';
import List from '../List';
import { Container, ListsContainer } from './styled';

export default function ListsArea() {
	return (
		<Container>
			<h1>ToDo List EBYTR</h1>
			<ListsContainer>
				<List type={"pending"} title={"Pendente"} />
				<List type={"in progress"} title={"Em progresso"} />
				<List type={"ready"} title={"Feito"}/>
			</ListsContainer>
		</Container>
	)
}
