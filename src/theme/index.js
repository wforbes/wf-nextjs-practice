/* eslint-disable no-bitwise */
import { createMuiTheme } from '@material-ui/core'
import palette from './global-styles/palette'
import reactGridLayout from './global-styles/react-grid-layout'

const theme = createMuiTheme({
	palette,
	overrides: {
		MuiCssBaseline: {
			'@global': {
				...reactGridLayout
			}
		}
	}
})

export default theme