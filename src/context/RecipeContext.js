import React, { createContext, useReducer } from 'react'

const initialState = {
	fractions: false,
	useSeconds: false,
}

export const RecipeAction = {
	TOGGLE_FRACTION: 'TOGGLE_FRACTION',
	TOGGLE_SECONDS: 'TOGGLE_SECONDS',
}

export const RecipeContext = createContext(initialState)

const reducer = (state, action) => {
	switch (action.type) {
		case RecipeAction.TOGGLE_FRACTION:
			return {
				...state,
				fractions: !state.fractions,
			}
		case RecipeAction.TOGGLE_SECONDS:
			return {
				...state,
				useSeconds: !state.useSeconds,
			}
		default:
			return state
	}
}

const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return <RecipeContext.Provider value={[state, dispatch]}>{children}</RecipeContext.Provider>
}

export default ContextProvider
