import React, { memo /*, useContext*/ } from 'react'

// import { RecipeContext } from 'context/RecipeContext'

// import Fraction from './Fraction'

//
// const Rate = ({ perMinFraction, perMin }) => {
const Rate = ({ perMin }) => {
	// const [{ fractions }] = useContext(RecipeContext)
	// return <strong>{fractions ? <Fraction fraction={perMinFraction} /> : perMin}</strong>
	return <strong>{perMin}</strong>
}

export default memo(Rate)
