import React, { memo } from 'react'
import { styled } from '@linaria/react'

import CycleRate from './CycleRate'
import Rate from './Rate'

const imageSize = 30

//
const Ingredient = ({ ingredient, isAssembler }) => {
	return (
		<Wrapper test-id={ingredient.slug}>
			<Header>
				{ingredient.icon ? (
					<Image
						src={`${process.env.REACT_APP_STATIC_PATH || ''}${ingredient.icon}`}
						// alt={ingredient.name}
						alt=""
						width={imageSize}
						height={imageSize}
						loading="lazy"
						// onError={() => console.warn('No Image: ' + ingredient.icon)}
					/>
				) : null}
				<CycleRate perCycleLabel={ingredient.rate.perCycleLabel} perCycle={ingredient.rate.perCycle} />
				<Name href={`#${ingredient.slug}`}>{ingredient.name}</Name>
			</Header>
			<Quantity>
				{/* <Rate perMin={ingredient.rate.perMin} /> */}
				{isAssembler && (
					<div>
						{/* <Rate small>{ingredient.rate.perMin * 0.75}</Rate> */}
						<Rate perMin={ingredient.rate.perMin * 0.75} small />
						<small>{ingredient.rate.perMinLabel}</small>
					</div>
				)}
				<div>
					{/* <Rate small={isAssembler}>{ingredient.rate.perMin}</Rate> */}
					{/* <Rate small={isAssembler}>{ingredient.rate.perMin}</Rate> */}
					<Rate perMin={ingredient.rate.perMin * 1.0} small={isAssembler} />
					<small>{ingredient.rate.perMinLabel}</small>
				</div>
				{isAssembler && (
					<div>
						{/* <Rate small>{ingredient.rate.perMin * 1.5}</Rate> */}
						<Rate perMin={ingredient.rate.perMin * 1.5} small />
						<small>{ingredient.rate.perMinLabel}</small>
					</div>
				)}
			</Quantity>
		</Wrapper>
	)
}

export default memo(Ingredient)

// const Rate = styled.span`
// 	font-weight: bold;
// 	/* margin-left: 2px; */
// 	margin-right: 2px;

// 	font-size: ${props => (props.small ? 0.8 : 1.0)}em;
// `

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 2px 0px;
	background: #ededed;
	padding: 4px 5px;
	border-radius: 5px;
`

const Header = styled.div`
	display: flex;
	align-items: center;
	font-size: 12px;
	line-height: 1.2;
`

const Image = styled.img`
	max-width: 100%;
	width: ${imageSize}px;
	height: ${imageSize}px;
	margin-right: 3px;
`

const Name = styled.a`
	padding-right: 3px;
`

const Quantity = styled.div`
	line-height: 1.2;
	white-space: nowrap;
`
