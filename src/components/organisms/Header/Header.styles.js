import {
	container,
	hexToRGBAlpha,
	defaultFont,
	primaryColor,
	infoColor,
	successColor,
	warningColor,
	dangerColor,
	roseColor,
	transition,
	boxShadow,
	drawerWidth
} from 'styles/nextjs-material-kit'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	appBar: { //from CreativeTim.com - Next.js Material v4 Kit
		display: "flex",
		border: "0",
		borderRadius: "3px",
		padding: "0.625rem 0",
		marginBottom: "20px",
		color: "#555",
		width: "100%",
		backgroundColor: "#fff",
		boxShadow:
			"0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
		transition: "all 150ms ease 0s",
		alignItems: "center",
		flexFlow: "row nowrap",
		justifyContent: "flex-start",
		position: "relative",
		zIndex: "unset"
	},
	container: {
		...container,
		minHeight: "50px",
		flex: "1",
		alignItems: "center",
		justifyContent: "space-between",
		display: "flex",
		flexWrap: "nowrap"
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	absolute: {
		position: "absolute",
		zIndex: "1100"
	},
	fixed: {
		position: "fixed",
		zIndex: "1100"
	},
	flex: {
		flex: 1
	},
	primary: {
		backgroundColor: primaryColor,
		color: "#FFFFFF",
		boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
			primaryColor,
			0.46
		)}`
	},
	info: {
		backgroundColor: infoColor,
		color: "#FFFFFF",
		boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
			infoColor,
			0.46
		)}`
	},
	success: {
		backgroundColor: successColor,
		color: "#FFFFFF",
		boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
			successColor,
			0.46
		)}`
	},
	warning: {
		backgroundColor: warningColor,
		color: "#FFFFFF",
		boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
			warningColor,
			0.46
		)}`
	},
	danger: {
		backgroundColor: dangerColor,
		color: "#FFFFFF",
		boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
			dangerColor,
			0.46
		)}`
	},
	rose: {
		backgroundColor: roseColor,
		color: "#FFFFFF",
		boxShadow: `0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px ${hexToRGBAlpha(
			roseColor,
			0.46
		)}`
	},
	transparent: {
		backgroundColor: "transparent !important",
		boxShadow: "none",
		paddingTop: "25px",
		color: "#FFFFFF"
	},
	white: {
		border: "0",
		padding: "0.625rem 0",
		marginBottom: "20px",
		color: "#555",
		backgroundColor: "#fff !important",
		boxShadow:
			"0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
	},
}))

export default useStyles