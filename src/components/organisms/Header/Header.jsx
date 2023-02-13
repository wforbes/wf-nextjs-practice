import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { MdMenu as MenuIcon } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'
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
					<Link href="/">
						<a>
							<Image src="/logo.png" width={48} height={48} alt="WF logo" />
						</a>
					</Link>
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
