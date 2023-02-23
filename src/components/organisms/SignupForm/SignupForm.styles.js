import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	profile: {
		textAlign: "center",
		"& .MuiAvatar-circle": {
			maxWidth: "240px",
			margin: "0 auto",
			transform: "translate3d(0, -50%, 0)"
		}
	},
}))

export default useStyles