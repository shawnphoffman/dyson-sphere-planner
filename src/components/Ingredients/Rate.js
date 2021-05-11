import React, { memo, useContext } from 'react'
import { styled } from '@linaria/react'

import { RecipeContext } from 'context/RecipeContext'

import Fraction from './Fraction'
const FractionJS = require('fraction.js')

//
// const Rate = ({ perMinFraction, perMin }) => {
const Rate = ({ perMin, small }) => {
	const [{ fractions }] = useContext(RecipeContext)
	return <Container small={small}>{fractions ? <Fraction fraction={new FractionJS(perMin).toFraction(true)} /> : perMin}</Container>
	// return <strong>{perMin}</strong>
}

const Container = styled.span`
	font-weight: bold;
	margin-right: 2px;

	font-size: ${props => (props.small ? 0.8 : 1.0)}em;
`

export default memo(Rate)
