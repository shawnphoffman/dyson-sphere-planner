import React, { memo, useContext } from 'react'
import { styled } from '@linaria/react'

import Page from 'components/Page'
import { ProductContext } from 'context/ProductContext'

import Recipe from './Recipe'
import RemoveIcon from './RemoveIcon'

const Meta = styled.div`
	margin-right: 5px;
	font-size: 10px;
	background: lightgreen;
	padding: 3px 6px;
	border-radius: 6px;
	font-weight: 600;
	white-space: nowrap;
	margin-top: 6px;
`

const MetaRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`

const imageSize = 100

const Resource = ({ item, slug }) => {
	const iconSrc = item.icon

	const { meta } = item

	const [{ shortNames }] = useContext(ProductContext)

	return (
		<Page>
			<Header id={slug}>
				<Details>
					<Title>
						{shortNames ? item.short_name : item.name} <RemoveIcon name={item.name} />
					</Title>
					<Description>{item.description}</Description>
					{!!meta && (
						<MetaRow>
							{Object.keys(meta)
								.sort()
								.map(key => (
									<Meta key={key}>
										{key}: {meta[key]}
									</Meta>
								))}
						</MetaRow>
					)}
				</Details>
				{iconSrc && (
					<Image alt="" src={`${process.env.REACT_APP_STATIC_PATH || ''}${iconSrc}`} width={imageSize} height={imageSize} loading="lazy" />
				)}
			</Header>
			{item.recipes.map(recipe => (
				<Recipe recipe={recipe} key={recipe.slug} />
			))}
		</Page>
	)
}

export default memo(Resource)

const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const Details = styled.div`
	width: 100%;
`

const Title = styled.h1`
	margin-top: 0;
	margin-bottom: 12px;
	display: block;
	line-height: 1.2;
	display: flex;
	align-items: center;

	@media (max-width: 400px) {
		font-size: 24px;
	}
`

const Description = styled.div`
	font-size: 12px;
	margin-right: 16px;
	line-height: 1.5;

	@media (max-width: 400px) {
		display: none;
	}
`

const Image = styled.img`
	display: ${props => (props.src ? 'inherit' : 'none')};
	max-width: 100%;
	width: ${imageSize}px;
	height: ${imageSize}px;
	padding: 8px;
	border-radius: 5px;
	margin-bottom: 4px;
	border: 1px solid #999;
`
