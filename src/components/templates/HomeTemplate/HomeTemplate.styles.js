import { container } from 'styles/nextjs-material-kit'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	container,
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	},
	introContainer: {
		padding: theme.spacing(3)
	},
	selfIntroContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		flexDirection: 'column'
	},
	listContainer: {
		padding: theme.spacing(3)
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
	imgRaised: {
		boxShadow:
			"0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
	},
	imgRoundedCircle: {
		borderRadius: "50% !important",
	},
	imgFluid: {
		maxWidth: "100%",
		height: "auto",
	},
	profile: {
		textAlign: "center",
		"& img": {
			maxWidth: "160px",
			width: "100%",
			margin: "0 auto",
			transform: "translate3d(0, -50%, 0)"
		}
	},
	beLoooong: {
		height: '300em'
	}
}))

export default useStyles
