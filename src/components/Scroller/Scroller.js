import React, { memo } from 'react'
import { styled } from '@linaria/react'

import ItemsJson from 'data/items-stable.json'

//
const Scroller = () => {
	return (
		<ScrollContainer>
			{ItemsJson.map(item => (
				<ScrollItem key={item.id}>
					<a href={`#${item.id}`}>{item.name}</a>
				</ScrollItem>
			))}
		</ScrollContainer>
	)
}

const ScrollContainer = styled.div`
	color: #fff;
	font-size: 14px;
	padding-left: 6px;
	height: 100vh;
	position: sticky;
	width: 200px;
	top: 0px;
	overflow-y: scroll;
	overflow-x: auto;
	min-width: 200px;

	@media (max-width: 600px) {
		display: none;
	}

	@media print {
		display: none;
	}
`

const ScrollItem = styled.div`
	padding: 6px;
`

export default memo(Scroller)
