/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import {
	MdCloudDownload as CloudDownload
} from "react-icons/md";
import { Apps as AppsIcon } from '@material-ui/icons'

// core components
import CustomDropdown from "src/components/molecules/CustomDropdown/CustomDropdown";
import Button from "src/components/molecules/CustomButtons/Button";

import styles from "./HeaderLinks.styles";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
	const classes = useStyles();
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					navDropdown
					buttonText="Components"
					buttonProps={{
						className: classes.navLink,
						color: "transparent"
					}}
					buttonIcon={AppsIcon}
					dropdownList={[
						<Link href="/components">
							<a className={classes.dropdownLink}>
								All components
							</a>
						</Link>,
						<a
							href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
							target="_blank"
							className={classes.dropdownLink}
						>
							Documentation
						</a>
					]}
				/>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar"
					color="transparent"
					target="_blank"
					className={classes.navLink}
				>
					<CloudDownload className={classes.icons} /> Download
				</Button>
			</ListItem>
		</List>
	);
}
