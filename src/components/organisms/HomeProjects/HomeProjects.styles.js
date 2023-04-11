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
		},
		'& dl': {
			'& dd.check': {
				display: 'list-item',
				marginLeft: '2ch',
				'&::marker': {
					content: '"✅ "',
					fontSize: '1rem'
				}
			},
			'& dd.teacher': {
				display: 'list-item',
				marginLeft: '2ch',
				'&::marker': {
					content: '"👩‍🏫 "',
					fontSize: '1rem'
				}
			},
			'& dd.clipboard': {
				display: 'list-item',
				marginLeft: '2ch',
				'&::marker': {
					content: '"📋 "',
					fontSize: '1rem'
				}
			},
			'& dd.chat-bubble': {
				display: 'list-item',
				marginLeft: '2ch',
				'&::marker': {
					content: '"💬 "',
					fontSize: '1rem'
				}
			},
			'& dd.money': {
				display: 'list-item',
				marginLeft: '2ch',
				'&::marker': {
					content: '"💵 "',
					fontSize: '1rem'
				}
			},
			'& dd.cart': {
				display: 'list-item',
				marginLeft: '2ch',
				'&::marker': {
					content: '"🛒 "',
					fontSize: '1rem'
				}
			},
			'& dd.wrench': {
				display: 'list-item',
				marginLeft: '2ch',
				'&::marker': {
					content: '"🔧 "',
					fontSize: '1rem'
				}
			}
		}
	},
	cardMedia: {
		height: 180,
		boxShadow: 'inset 0 0 10px 10px rgba(200, 200, 200, 0.5)'
	}
}))
export default useStyles