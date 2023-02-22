import { makeStyles } from '@material-ui/core/styles'
import { amber, green } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'grid',
		gridTemplateColumns: '80% 20%'
	},
	success: {
		backgroundColor: green[600]
	},
	error: {
		backgroundColor: theme.palette.error.dark
	},
	info: {
		backgroundColor: theme.palette.primary.main
	},
	warning: {
		backgroundColor: amber[700]
	},
	icon: {
		fontSize: 20
	},
	iconVariant: {
		opacity: 0.9,
		marginRight: theme.spacing(1)
	},
	message: {
		display: 'flex',
		alignItems: 'center'
	}
}))

export default useStyles;
