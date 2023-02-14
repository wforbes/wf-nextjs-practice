import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	selfIntroContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		flexDirection: 'column'
	},
	introHighlights: {
		padding: theme.spacing(3)
	},
	highlightContainer: {
		"@media (min-width: 959px)": {
			paddingTop: '3em'
		},
		"@media (max-width: 960px)": {
			paddingTop: '0.5em !important'
		}
	},
	listContainer: {
		padding: theme.spacing(3)
	},
	introAvatar: {
		overflow: 'visible !important',
		marginTop: "2.2rem"
	},
	highlightAvatar: {
		overflow: 'visible !important'
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
			maxWidth: "240px",
			width: "100%",
			margin: "0 auto",
			transform: "translate3d(0, -50%, 0)"
		}
	},
	profileImgContainer: {
		height: '15vh' // reduces space between img and profile text
					   //	needs to match highlight box height
	},
}))

export default useStyles
