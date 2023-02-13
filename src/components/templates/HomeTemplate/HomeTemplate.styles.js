import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
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
	}
}))

export default useStyles
