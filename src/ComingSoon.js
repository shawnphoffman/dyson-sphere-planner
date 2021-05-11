import React from 'react'
import { styled } from '@linaria/react'

import colors from 'utils/colors'

const Title = styled.h1`
	color: ${colors.white};
	font-family: 'Teko', sans-serif;
	font-weight: 300;
	font-size: 6rem;
	margin-top: 1em;
	text-shadow: 1px 2px ${colors.orange};
	letter-spacing: 0.05em;
`

function App() {
	return (
		<div>
			<Title>Coming Soon...</Title>
		</div>
	)
}

export default App
