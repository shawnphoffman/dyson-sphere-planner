import React, { createContext, useReducer } from 'react'

const initialState = {
	padLeftMargin: false,
	onePerPage: true,
	removedProducts: [],
	hiddenTypes: [],
	shortNames: false,
}

export const ProductAction = {
	TOGGLE_LEFT_MARGIN: 'TOGGLE_LEFT_MARGIN',
	TOGGLE_ONE_PER_PAGE: 'TOGGLE_ONE_PER_PAGE',
	TOGGLE_SHORT_NAMES: 'TOGGLE_SHORT_NAMES',
	REMOVE_PRODUCT: 'REMOVE_PRODUCT',
	RETURN_PRODUCT: 'RETURN_PRODUCT',
	RETURN_ALL_PRODUCTS: 'RETURN_ALL_PRODUCTS',
	HIDE_TYPE: 'HIDE_TYPE',
	SHOW_TYPE: 'SHOW_TYPE',
}

export const ProductContext = createContext(initialState)

const reducer = (state, action) => {
	switch (action.type) {
		case ProductAction.TOGGLE_LEFT_MARGIN:
			return {
				...state,
				padLeftMargin: !state.padLeftMargin,
			}
		case ProductAction.TOGGLE_ONE_PER_PAGE:
			return {
				...state,
				onePerPage: !state.onePerPage,
			}
		case ProductAction.TOGGLE_SHORT_NAMES:
			return {
				...state,
				shortNames: !state.shortNames,
			}
		// ITEM FILTERING
		case ProductAction.REMOVE_PRODUCT:
			return {
				...state,
				removedProducts: [...state.removedProducts, action.name],
			}
		case ProductAction.RETURN_PRODUCT:
			return {
				...state,
				removedProducts: state.removedProducts.filter(p => !(p === action.name)),
			}
		case ProductAction.RETURN_ALL_PRODUCTS:
			return {
				...state,
				removedProducts: [],
			}
		// BUILDING TYPE
		case ProductAction.HIDE_TYPE:
			// console.log('Hiding: ' + action.name)
			return {
				...state,
				hiddenTypes: [...state.hiddenTypes, action.name],
			}
		case ProductAction.SHOW_TYPE:
			// console.log('Showing: ' + action.name)
			return {
				...state,
				hiddenTypes: state.hiddenTypes.filter(p => !(p === action.name)),
			}
		default:
			return state
	}
}

const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return <ProductContext.Provider value={[state, dispatch]}>{children}</ProductContext.Provider>
}

export default ContextProvider
