import React from 'react'
import { Container } from './styled'


export default function ToDo({ todo }) {
	const { title, description, author } = todo;
	return (
		<Container>
			<h2>{ title }</h2>
			<p>{ description }</p>
			<small>{ author }</small>
		</Container>
	)
}
