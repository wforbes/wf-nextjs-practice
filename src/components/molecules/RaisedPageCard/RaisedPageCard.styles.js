import { container, smlPadding } from 'styles/nextjs-material-kit'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	container,
	smlPadding,
	main: {
		background: "#FFFFFF",
		position: "relative",
		zIndex: "3"
	},
	secondaryRaised: {
		background: "#FFF",
		position: "relative",
		zIndex: "3",
		margin: "30px 30px 0px",
		borderRadius: "6px",
		boxShadow:
			"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
	},
	mainRaised: {
		margin: "-60px 30px 0px",
		borderRadius: "6px",
		boxShadow:
			"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
	},
}))

export default useStyles