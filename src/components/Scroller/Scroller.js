import React, { memo, useContext, useMemo } from 'react'
import { styled } from '@linaria/react'

import ItemsJson from 'data/items-stable.json'

import { ProductContext } from 'context/ProductContext'

//
const Scroller = () => {
	const [{ shortNames }] = useContext(ProductContext)

	const items = useMemo(() => {
		if (!shortNames) return ItemsJson

		return ItemsJson.sort((a, b) => {
			const aName = a.short_name
			const bName = b.short_name

			if (aName > bName) return 1
			if (bName > aName) return -1
			return 0
		}).map(item => {
			return {
				...item,
				name: item.short_name,
			}
		})
	}, [shortNames])

	return (
		<ScrollContainer>
			{items.map(item => (
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
