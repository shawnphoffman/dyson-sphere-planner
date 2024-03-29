import React, { lazy, memo } from 'react'
import { styled } from '@linaria/react'

// import logo from './logo.png'

const Sidebar = lazy(() => import('components/Sidebar/Sidebar'))
// const Sidebar = lazy(() => {
// 	return Promise.all([
// 		import('./Sidebar'),
// 		new Promise(resolve => {
// 			// setTimeout(() => {}, 3000)
// 			setTimeout(resolve, 10000)
// 		}),
// 	]).then(([module]) => module)
// })

const SidebarContainer = () => {
	return (
		<SidebarWrapper>
			<div>
				<Logo src={`${process.env.REACT_APP_STATIC_PATH || ''}logo.png`} alt="" width="182" height="63" />
			</div>
			<React.Suspense fallback={<div></div>}>
				<Sidebar />
			</React.Suspense>
		</SidebarWrapper>
	)
}

export default memo(SidebarContainer)

const SidebarWrapper = styled.div`
	/* min-width: 210px; */
	min-width: 210px;
	width: 200px;
	background: #bbb;
	position: sticky;
	top: 0;
	height: 100vh;
	padding: 10px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@media print {
		display: none;
	}

	/* TODO - Extract the max-width to variable */
	@media screen and (max-width: 600px) {
		width: 100%;
		position: unset;
		height: auto;
	}
`

const Logo = styled.img`
	max-width: 100%;
	height: auto;
`
