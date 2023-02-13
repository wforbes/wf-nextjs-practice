import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Header from 'src/components/organisms/Header/Header'
import withWidth from '@material-ui/core/withWidth'
import useStyles from './MainTemplate.styles'

const MainTemplate = ({ children, width}) => {
	const classes = useStyles()
	return (
		<>
			<Header />
			<Container
				className={classes.root}
				maxWidth={false}
				disableGutters
			>
				{children}
			</Container>
		</>
	)
}

MainTemplate.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
}

export default withWidth()(MainTemplate)
