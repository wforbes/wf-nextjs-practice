import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { List, ListItem } from "@material-ui/core";

import useStyles from './Footer.styles'

export default function Footer(props) {
	const classes = useStyles()
	const { whiteFont } = props
	const footerClasses = classNames({
		[classes.footer]: true,
		[classes.footerWhiteFont]: whiteFont
	})
	const aClasses = classNames({
		[classes.a]: true,
		[classes.footerWhiteFont]: whiteFont
	})
	return (
		<footer className={footerClasses}>
			<div className={classes.container}>
				<div className={classes.left}>
					<List className={classes.list}>
						<ListItem className={classes.inlineBlock}>
							<a
								href="/about"
								className={classes.block}
								target="_blank"
							>
								About me
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a
								href="http://blog.creative-tim.com/?ref=njsmk-footer"
								className={classes.block}
								target="_blank"
							>
								Blog
							</a>
						</ListItem>
					</List>
				</div>
				<div className={classes.right}>
					&copy; {1900 + new Date().getYear()} Will Forbes (&amp; {" "}
					<a href="/attributions" target="_blank">these awesome creators</a>)
				</div>
			</div>
		</footer>
	)
}

Footer.propTypes = {
	whiteFont: PropTypes.bool
}