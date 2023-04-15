import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	gridItem: {
		paddingBottom: '1em !important'
	},
	cardContent: {
		paddingBottom: '0 !important',
		'& h2': {
			margin: 0,
			textAlign: 'center'
		},
		'& p': {
			textAlign: 'center'
		}
	},
	cardMedia: {
		height: 180,
		boxShadow: 'inset 0 0 10px 10px rgba(200, 200, 200, 0.5)'
	}
}))
export default useStyles