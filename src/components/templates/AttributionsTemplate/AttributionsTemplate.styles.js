import { container, pageContentContainer, boldLink } from 'styles/nextjs-material-kit'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	container,
	pageContentContainer,
	boldLink,
	pageHeadingContainer: {
		color: "#FFFFFF",
		textAlign: "center"
	},
	pageHeading: {
		fontSize: "4.2rem",
		fontWeight: "600",
		display: "inline-block",
		position: "relative"
	},
	main: {
		background: "#FFFFFF",
		position: "relative",
		zIndex: "3"
	},
	mainRaised: {
		margin: "-60px 30px 0px",
		borderRadius: "6px",
		boxShadow:
			"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
	},
	beLoooong: {
		height: '300em'
	}
}))

export default useStyles
