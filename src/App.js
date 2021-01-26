import React from 'react'
import { styled } from '@linaria/react'

const Title = styled.h1`
	color: darkred;
`

const Description = styled.div`
	font-size: ${props => props.size}px;
`

function App() {
	return (
		<div>
			<Title>Test</Title>
			<Description size={12}>This is a description.</Description>
		</div>
	)
}

export default App
