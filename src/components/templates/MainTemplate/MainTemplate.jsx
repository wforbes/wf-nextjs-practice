import React from 'react'
import PropTypes from 'prop-types'
import Header from 'src/components/organisms/Header/Header'
import HeaderLinks from 'src/components/organisms/Header/HeaderLinks'
import Footer from 'src/components/organisms/Footer/Footer'
import withWidth from '@material-ui/core/withWidth'

import useStyles from './MainTemplate.styles'

const MainTemplate = ({ children }) => {
	const classes = useStyles()
	return (
		<>
			<Header
				color="transparent"
				rightLinks={<HeaderLinks />}
				fixed
				changeColorOnScroll={{
					height: 200,
					color: "white"
				}}
			/>
			{children}
			<Footer />
		</>
	)
}

MainTemplate.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
}

export default withWidth()(MainTemplate)
