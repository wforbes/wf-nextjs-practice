import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import PropTypes from 'prop-types'

const getPathName = () => {
	const router = useRouter()
	let displayPath = router.pathname.substring(1, router.pathname.length)
	if (displayPath.length === 0) return "Home"
	return displayPath[0].toLocaleUpperCase() + displayPath.substring(1, displayPath.length)
}

const HeadProvider = ({ title, children }) => (
	<>
		<Head>
			<title>{title ? title : `wf-nextjs-practice | ${getPathName()}`}</title>
			<link rel="icon" href="/favicon.ico" />
			<meta
				name="viewport"
				content="minimum-scale=1, initial-scale=1, width=device-width"
			/>
		</Head>
		{children}
	</>
)

HeadProvider.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired
}

export default HeadProvider
