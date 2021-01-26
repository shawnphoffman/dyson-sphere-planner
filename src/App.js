import React from 'react'
import { styled } from '@linaria/react'
import colors from './utils/colors'

import './.spritesmith-generated/sprite.css'
import sprites from './.spritesmith-generated/sprite.json'

const SpriteWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Title = styled.h1`
	color: ${colors.white};
	font-family: 'Teko', sans-serif;
	font-weight: 300;
	font-size: 6rem;
	margin-top: 1em;
	text-shadow: 1px 2px ${colors.orange};
	letter-spacing: 0.05em;
	text-align: center;
`

function App() {
	return (
		<div>
			<Title>Coming Soon...</Title>
			<SpriteWrapper>
				{Object.keys(sprites).map(s => (
					<div className={`icon-${s}`} key={s} />
				))}
			</SpriteWrapper>
		</div>
	)
}

export default App
