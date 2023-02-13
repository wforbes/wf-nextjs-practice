import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { MdMenu as MenuIcon } from 'react-icons/md'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}))

const Header = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<AppBar color="transparent">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Next.js Practice
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}

Header.propTypes = {
	classes: PropTypes.shape({
		appBar: PropTypes.string
	})
}

export default Header
