const path = require('path')
const { loaderByName, getLoader } = require('@craco/craco')
const transformBabelLoader = require('./config/transformBabelLoader')
var SpritesmithPlugin = require('webpack-spritesmith')

module.exports = {
	webpack: {
		configure: webpackConfig => {
			//
			// console.log(JSON.stringify(webpackConfig.resolve, null, 2))
			// throw 'test'

			//
			const lm = getLoader(webpackConfig, loaderByName('babel-loader'))
			const loader = lm.match.loader
			webpackConfig.module.rules[1].oneOf[2] = transformBabelLoader(loader)

			//
			webpackConfig.resolve.modules.push('webpack-spritesmith')
			webpackConfig.plugins.push(
				new SpritesmithPlugin({
					src: {
						cwd: path.resolve(__dirname, 'src/images'),
						glob: '*.png',
					},
					target: {
						image: path.resolve(__dirname, 'src/.spritesmith-generated/sprite.png'),
						css: [
							path.resolve(__dirname, 'src/.spritesmith-generated/sprite.css'),
							[
								path.resolve(__dirname, 'src/.spritesmith-generated/sprite.json'),
								{
									format: 'json',
								},
							],
						],
					},
					apiOptions: {
						cssImageRef: './sprite.png',
					},
				})
			)

			//
			return webpackConfig
		},
	},
	jest: {
		configure: jestConfig => {
			// jestConfig.transform['^.+\\.(js|jsx|ts|tsx)$'] = require.resolve('./config/babelTransform.js')
			return jestConfig
		},
	},
}
