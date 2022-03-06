import React, { memo, unstable_useTransition as useTransition, useContext, useEffect, useMemo, useState } from 'react'
import { styled } from '@linaria/react'
import * as Sentry from '@sentry/react'

// import rawData from 'data/data-v4.json'
import ResourceError from 'components/Errors/ResourceError'
import Resource from 'components/Resources/Resource'
import { ProductContext } from 'context/ProductContext'

import Loading from './Loaders/Loading'

// const Resource = lazy(() => import('components/Resources/Resource'))

const ProductList = ({ version = 'stable' }) => {
	const [{ removedProducts, hiddenTypes, shortNames }] = useContext(ProductContext)

	const [data, setData] = useState({})
	// const [data, setData] = useState(rawData)

	const [isPending, startTransition] = useTransition({
		timeoutMs: 3000,
	})

	//
	useEffect(() => {
		// console.log('data.json loading...')
		// setTimeout(() => {
		fetch(`/data-${version}.json`)
			.then(res => res.json())
			.then(data => {
				// console.log('data.json loaded', data)
				return startTransition(() => {
					setData(data.items)
				})
			})
			.catch(e => console.error(e))
		// }, 3000)
	}, [startTransition, version])

	//
	const filteredProducts = useMemo(() => {
		// console.log('memo.filteredProducts')

		const newData = Object.keys(data).reduce((memo, slug) => {
			// filtered items
			if (removedProducts.includes(data[slug].name)) return memo

			// hidden types
			const isHidden = hiddenTypes.filter(type => {
				return type === data[slug].category
				// return type.toLowerCase() === data[slug].category
			})
			if (isHidden.length > 0) return memo

			memo[slug] = data[slug]
			return memo
		}, {})

		return newData
	}, [data, hiddenTypes, removedProducts])

	const sortedItemKeys = useMemo(() => {
		const sorted = Object.keys(filteredProducts).sort((a, b) => {
			const aName = filteredProducts[a][shortNames ? 'short_name' : 'name']
			const bName = filteredProducts[b][shortNames ? 'short_name' : 'name']

			if (aName > bName) return 1
			if (bName > aName) return -1
			return 0
		})
		return sorted
	}, [filteredProducts, shortNames])

	if (isPending) return <Loading />

	if (Object.keys(filteredProducts).length === 0) {
		// console.log('ProductList.loading')
		return <Loading />
	}

	// console.log('ProductList.render')

	return (
		<Wrapper>
			{/* {showV3 && <Version>Recipes for {version}</Version>} */}
			{sortedItemKeys.map(p => (
				<Sentry.ErrorBoundary key={p} fallback={<ResourceError slug={p} />}>
					<Resource slug={p} item={data[p]} />
				</Sentry.ErrorBoundary>
			))}
		</Wrapper>
	)
}

// const Version = styled.div`
// 	margin-top: 4mm;
// 	margin-left: 4mm;
// 	font-size: 0.7em;
// `

const Wrapper = styled.div`
	width: 100%;
	background: white;

	@media screen {
		max-width: 700px;
	}
`

export default memo(ProductList)
