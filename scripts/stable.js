// console.log('START data files')
const Fraction = require('fraction.js')
const jsonfile = require('jsonfile')
const chalk = require('chalk')
require('@gouch/to-title-case')

// Helpers
const log = args => true && console.log(args)

// Original JSON
const sourceJson = require('../raw/game-stable-feb2022.json')
const addonsJson = require('../raw/game-addons.json')
const itemsJson = {
	...sourceJson.itemsData,
	...addonsJson.itemsData,
}
const recipesJson = {
	...sourceJson.recipesData,
	...addonsJson.recipesData,
}
const buildingsJson = {
	...sourceJson.buildingsData,
	...addonsJson.buildingsData,
}
const techJson = {
	...sourceJson.technologiesData,
	...addonsJson.technologiesData,
}
const altMapJson = require('../raw/data.json')

// Filenames
const outputPaths = ['./src/data/data-stable.json', './public/data-stable.json']
const categoryOutputPaths = ['./src/data/categories-stable.json']
const itemsOutputPaths = ['./src/data/items-stable.json']
const testOutputPaths = ['./src/data/test.json']
const outputJson = { items: {}, categories: [] }

// Helpers
const itemClassToSlug = Object.keys(itemsJson).reduce((memo, key) => {
	const item = itemsJson[key]
	memo[item.className] = key
	return memo
}, {})

const techClassToSlug = Object.keys(techJson).reduce((memo, key) => {
	const tool = techJson[key]
	memo[tool.className] = key
	return memo
}, {})

const buildingClassToName = Object.keys(buildingsJson).reduce((memo, key) => {
	const building = buildingsJson[key]
	memo[building.className] = building.name
	return memo
}, {})

// Dumb
const buildingClassToSlug = Object.keys(buildingsJson).reduce((memo, key) => {
	const building = buildingsJson[key]
	memo[building.className] = key
	return memo
}, {})

const getAltItem = name => {
	let clean = name.toLowerCase()
	if (clean !== 'plane smelter') {
		clean = clean.replace('smelter', 'arc smelter')
	}
	clean = clean.replace('assembler', 'assembling machine')
	clean = clean.replace('mk i', 'mk.i')
	clean = clean.replace('mk ii', 'mk.ii')
	clean = clean.replace('mk iii', 'mk.iii')
	if (clean === 'splitter') {
		clean = 'splitter (4-direction)'
	}

	const alt = altMapJson.items.find(x => x.name.toLowerCase() === clean)

	if (!alt) {
		console.error('NO ALT', clean)
		return
	}

	return alt
}

const processName = name => {
	let clean = name.toLowerCase().toTitleCase()
	clean = clean.replace('Assembling Machine', 'Assembler')
	clean = clean.replace('mk.iii', 'MK III')
	clean = clean.replace('mk.ii', 'MK II')
	clean = clean.replace('mk.i', 'MK I')
	return clean
}

const processDescription = desc => desc?.replaceAll(/<br\s*\/?>/gi, '\r\n')

const processCategory = category => {
	let title = category.replace(/[A-Z]/g, letter => ` ${letter}`)
	title = title.toLowerCase()
	if (title.includes('logistic')) {
		title = 'Logistics'
	}
	if (['generator', 'power transmission'].includes(title)) {
		title = 'Power'
	}
	if (title.includes('science')) {
		title = 'science'
	}
	return title.toTitleCase()
}

const processIcon = icon => icon.split('/').pop().split('?').shift().replace(/-/g, '_')

const processStack = name => {
	const alt = getAltItem(name)
	return alt ? alt.stack : null
}

const processProliferators = name => {
	// const nameLower = name.toLowerCase()
	// if (!nameLower.includes('proliferator')) return {}

	const alt = getAltItem(name)

	if (!alt) return {}

	let altEffects = altMapJson.items
		.filter(x => x.category === 'effects' && x.module.proliferator === alt.id)
		.reduce((memo, effect) => {
			memo = {
				...memo,
				...(effect.module.consumption && {
					Energy: `+${effect.module.consumption * 100}%`,
				}),
				...(effect.module.productivity && {
					Products: `+${effect.module.productivity * 100}%`,
				}),
				...(effect.module.speed && {
					Speed: `+${effect.module.speed * 100}%`,
				}),
				...(effect.module.sprays && {
					Sprays: effect.module.sprays,
				}),
			}
			console.log(effect)
			return memo
		}, {})

	if (alt.factory) {
		altEffects = {
			...altEffects,
			...(alt.factory.usage && {
				Energy: `${alt.factory.usage} kW`,
			}),
			...(alt.factory.drain && {
				'Energy (Idle)': `${alt.factory.drain} kW`,
			}),
			...(alt.factory.speed &&
				alt.factory.speed !== 1 && {
					Speed: `${alt.factory.speed}x`,
				}),
		}
	}

	// altEffects = {
	// 	...altEffects,
	// 	...altMapJson.items
	// 		.filter(x => x.factory)
	// 		.reduce((memo, effect) => {
	// 			memo = {
	// 				...memo,
	// 				// ...(effect.module.consumption && {
	// 				// 	Energy: `+${effect.module.consumption * 100}%`,
	// 				// }),
	// 				// ...(effect.module.productivity && {
	// 				// 	Products: `+${effect.module.productivity * 100}%`,
	// 				// }),
	// 				// ...(effect.module.speed && {
	// 				// 	Speed: `+${effect.module.speed * 100}%`,
	// 				// }),
	// 				// ...(effect.factory.usage && {
	// 				// 	Use: `${effect.factory.usage} kW`,
	// 				// }),
	// 				// ...(effect.factory.drain && {
	// 				// 	Idle: `${effect.factory.drain} kW`,
	// 				// }),
	// 				// ...(effect.factory.speed &&
	// 				// 	effect.factory.speed !== 1 && {
	// 				// 		Speed: `${effect.factory.speed}x`,
	// 				// 	}),
	// 			}
	// 			console.log(effect)
	// 			return memo
	// 		}, {}),
	// }

	return altEffects
}

const processBuildingName = buildings => {
	if (!buildings) return

	const list = buildings.reduce((memo, bldg) => {
		let name = buildingClassToName[bldg]

		if (name) {
			name = processName(name)

			if (name.indexOf('Assembling Machine') > -1) name = 'Assembler'
			if (name.indexOf('Assembler') > -1) name = 'Assembler'
			if (name.indexOf('Particle Collider') > -1) name = 'Particle Collider'
			if (name.indexOf('Matrix') > -1) name = 'Lab'
			if (name.indexOf('Oil') > -1) name = 'Refinery'
			if (name.indexOf('Plane Smelter') > -1) name = 'Smelter'

			if (!memo.includes(name)) memo.push(name)
		} else {
			log('')
			log(chalk.red('NO NAME'))
			log(chalk.red(bldg))
			log('')
		}
		return memo
	}, [])
	return list.join(', ')
}

const calculateRate = (amount, duration, category) => {
	const isFluid = category === 'liquid' && false
	const amt = isFluid ? amount / 1000 : amount
	const decimal = Number((amt * (60 / duration)).toFixed(4))
	const fraction = new Fraction(decimal).toFraction(true)

	return {
		perMin: decimal,
		perMinFraction: fraction,
		perMinLabel: isFluid ? 'm³/min' : '/min',
		perCycle: amt,
		perCycleLabel: isFluid ? 'm³' : 'x',
	}
}

const invalidRecipe = recipe => {
	const ingredientKeys = Object.keys(recipe.ingredients)
	const productKeys = Object.keys(recipe.produce)

	if (ingredientKeys.length !== productKeys.length) return false

	let invalid = true
	ingredientKeys.forEach(ing => {
		if (!productKeys.includes(ing)) invalid = false
	})

	return invalid
}

const sortRecipes = recipes =>
	recipes.sort((a, b) => {
		const aAlt = a.name.includes('(Advanced)')
		const bAlt = b.name.includes('(Advanced)')

		if (aAlt && bAlt) {
			if (a.name > b.name) return 1
			if (b.name > a.name) return -1
			return 0
		}

		if (aAlt && !bAlt) return 1
		if (!aAlt && bAlt) return -1

		if (a.name > b.name) return 1
		if (b.name > a.name) return -1

		return 0
	})

// Process Recipes
const recipes = Object.keys(recipesJson).reduce((memo, key) => {
	const recipeSource = recipesJson[key]

	log(`PROCESSING RECIPE: ${key} (${recipeSource.name})`)

	// Skip recipes with the same ins and outs
	if (invalidRecipe(recipeSource)) {
		console.log(chalk.red('INVALID RECIPE: ' + key))
		return memo
	}

	const recipeOut = {
		name: processName(recipeSource.name),
		slug: key,
		producedIn: processBuildingName(recipeSource.mProducedIn),
		ingredients: [],
		products: [],
	}

	// INGREDIENTS
	Object.keys(recipeSource.ingredients).forEach(className => {
		const itemSlug = itemClassToSlug[className] || techClassToSlug[className] || buildingClassToSlug[className]

		// TODO - Undefined names
		if (!itemSlug) {
			console.log(chalk.red('NO INGREDIENT FOUND', className))
			return
		}

		log(` - Recipe Requires: ${itemSlug} `)

		const item = itemsJson[itemSlug] || techJson[itemSlug] || buildingsJson[itemSlug]

		recipeOut.ingredients.push({
			name: processName(item.name),
			slug: itemSlug,
			icon: processIcon(item.image),
			rate: calculateRate(recipeSource.ingredients[className], recipeSource.mManufactoringDuration, item.category),
		})
	})

	// PRODUCTS
	Object.keys(recipeSource.produce).forEach(className => {
		const itemSlug = itemClassToSlug[className] || buildingClassToSlug[className]

		if (!itemSlug) {
			console.log(chalk.red('NO ITEM FOUND', className))
			return
		}

		log(` - Recipe Produces: ${itemSlug} `)

		const item = itemsJson[itemSlug] || buildingsJson[itemSlug]

		if (itemSlug)
			recipeOut.products.push({
				name: processName(item.name),
				slug: itemSlug,
				icon: processIcon(item.image),
				rate: calculateRate(recipeSource.produce[className], recipeSource.mManufactoringDuration, item.category),
			})
	})
	recipeOut.products.forEach(p => {
		if (memo[p.slug]) {
			memo[p.slug] = [...memo[p.slug], recipeOut]
		} else {
			memo[p.slug] = [recipeOut]
		}
	})

	log('')

	return memo
}, {})

const errThang = {
	...itemsJson,
	...buildingsJson,
}

// Do it
Object.keys(errThang)
	.sort((a, b) => {
		const aName = errThang[a].name
		const bName = errThang[b].name

		if (aName > bName) return 1
		if (bName > aName) return -1
		return 0
	})
	.forEach(key => {
		if (!recipes[key]) return

		const item = errThang[key]
		outputJson.items[key] = {
			name: processName(item.name),
			description: processDescription(item.description),
			category: processCategory(item.category),
			icon: processIcon(item.image),
			meta: {
				Stack: processStack(item.name),
				...processProliferators(item.name),
			},
			// type: 'Item',
			recipes: sortRecipes(recipes[key]),
		}
	})

const uniqueCategories = Object.keys(outputJson.items)
	.map(o => outputJson.items[o].category)
	.filter((value, index, self) => {
		return self.indexOf(value) === index
	})
	.sort()

outputJson.categories = uniqueCategories

log('')
log('CATEGORIES')
log(uniqueCategories)
log('')

categoryOutputPaths.forEach((path, i) => {
	jsonfile.writeFile(path, uniqueCategories, i !== 0 ? {} : { spaces: 2 }, function (err) {
		if (err) console.error(err)
		else console.log('FINISHED CATEGORIES: ' + path)
	})
})

const uniqueItems = Object.keys(outputJson.items)
	.sort((a, b) => {
		const aName = outputJson.items[a].name
		const bName = outputJson.items[b].name

		if (aName > bName) return 1
		if (bName > aName) return -1
		return 0
	})
	.map(o => {
		return {
			id: o,
			name: outputJson.items[o].name,
		}
	})

log('')
log('ITEMS')
log(uniqueItems)
log('')

itemsOutputPaths.forEach((path, i) => {
	jsonfile.writeFile(path, uniqueItems, i !== 0 ? {} : { spaces: 2 }, function (err) {
		if (err) console.error(err)
		else console.log('FINISHED ITEMS: ' + path)
	})
})

// Save the clean file
outputPaths.forEach((path, i) => {
	jsonfile.writeFile(path, outputJson, i !== 0 ? {} : { spaces: 2 }, function (err) {
		if (err) console.error(err)
		else console.log('FINISHED DATA: ' + path)
	})
})

// Test
const testOutput = altMapJson.items.filter(x => x.category === 'effects')
// const testOutput = uniqueItems.map(item => {
// 	const returnVal = {
// 		...item,
// 	}
// 	const alt = getAltItem(item.name)
// 	if (alt) {
// 		returnVal.stack = alt.stack
// 	}
// 	return returnVal
// })

testOutputPaths.forEach((path, i) => {
	jsonfile.writeFile(path, testOutput, i !== 0 ? {} : { spaces: 2 }, function (err) {
		if (err) console.error(err)
		else console.log('FINISHED TEST: ' + path)
	})
})

// End
return
