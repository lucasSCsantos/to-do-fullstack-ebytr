import React from 'react'
import { Container } from './styled'


export default function ToDo({ todo }) {
	const { title, description, author } = todo;
	return (
		<Container>
			<p className="todoTitle">{ title.toUpperCase() }</p>
			{/* <p>{ description }</p>
			<small>{ author }</small> */}
		</Container>
	)
}
