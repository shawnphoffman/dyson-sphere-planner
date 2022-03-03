import React, { lazy, memo } from 'react'
import { styled } from '@linaria/react'
import * as Sentry from '@sentry/react'

import Error from 'components/Errors/AppError'
import Loading from 'components/Loaders/Loading'
import Scroller from 'components/Scroller/Scroller'
import Sidebar from 'components/Sidebar/SidebarContainer'
import ProductContext from 'context/ProductContext'
import RecipeContext from 'context/RecipeContext'

const ProductList = lazy(() => import('components/ProductList'))

function App() {
	return (
		<Sentry.ErrorBoundary fallback={<Error />} showDialog={process.env.NODE_ENV === 'production'}>
			<ProductContext>
				<RecipeContext>
					<React.Profiler id="App">
						<FlexRows>
							<Sidebar />
							<ProductListWrapper />
							<Scroller />
						</FlexRows>
					</React.Profiler>
				</RecipeContext>
			</ProductContext>
		</Sentry.ErrorBoundary>
	)
}

const ProductListWrapper = () => {
	return (
		<React.Suspense fallback={<Loading />}>
			<ProductList />
		</React.Suspense>
	)
}

export default memo(App)

const FlexRows = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`
