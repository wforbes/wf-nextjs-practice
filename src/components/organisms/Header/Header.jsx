import { useState, useEffect } from 'react'
import Link from "next/link";
import classNames from "classnames";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Image from 'next/image'

import { MdMenu as MenuIcon } from 'react-icons/md'

import useStyles from './Header.styles'

const Header = (props) => {
	const classes = useStyles()

	const [mobileOpen, setMobileOpen] = useState(false)

	useEffect(() => {
		if (props.changeColorOnScroll) {
			window.addEventListener('scroll', headerColorChange)
		}
		return function cleanup() {
			if (props.changeColorOnScroll) {
				window.removeEventListener('scroll', headerColorChange)
			}
		};
	});

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const headerColorChange = () => {
		const { color, changeColorOnScroll } = props
		const windowsScrollTop = window.pageYOffset
		if (windowsScrollTop > changeColorOnScroll.height) {
			document.body.getElementsByTagName('header')[0]
				.classList.remove(classes[color])
			document.body.getElementsByTagName('header')[0]
				.classList.add(classes[changeColorOnScroll.color])
		} else {
			document.body.getElementsByTagName("header")[0]
				.classList.add(classes[color]);
			document.body.getElementsByTagName("header")[0]
				.classList.remove(classes[changeColorOnScroll.color]);
		}
	}

	const { color, rightLinks, leftLinks, fixed, absolute } = props;

	const appBarClasses = classNames({
		[classes.appBar]: true,
		[classes[color]]: color,
		[classes.absolute]: absolute,
		[classes.fixed]: fixed
	});

	const brandIconComponent = (
		<Link href="/">
			<a>
				<Image src="/logo.png" width={48} height={48} alt="WF logo" />
			</a>
		</Link>
	);

	return (
		<AppBar className={appBarClasses}>
			<Toolbar className={classes.container}>
				{leftLinks !== undefined ? brandIconComponent : null}
				<div className={classes.flex}>
					{leftLinks !== undefined ? (
						<Hidden smDown implementation="css">
							{leftLinks}
						</Hidden>
					) : (
						brandIconComponent
					)}
				</div>
				<Hidden smDown implementation="css">
					{rightLinks}
				</Hidden>
				<Hidden mdUp>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerToggle}
					>
						<MenuIcon />
					</IconButton>
				</Hidden>
				<Hidden mdUp implementation="js">
					<Drawer
						variant="temporary"
						anchor={"right"}
						open={mobileOpen}
						classes={{
							paper: classes.drawerPaper
						}}
						onClose={handleDrawerToggle}
					>
						<div className={classes.appResponsive}>
							{leftLinks}
							{rightLinks}
						</div>
					</Drawer>
				</Hidden>
			</Toolbar>
		</AppBar>
	)
}

Header.propTypes = {
	classes: PropTypes.shape({
		appBar: PropTypes.string
	})
}

export default Header
