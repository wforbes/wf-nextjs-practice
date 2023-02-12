import React, { useEffect } from 'react'
import HeadProvider from 'src/components/providers/HeadProvider/HeadProvider'
import theme from 'src/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import CssBaseline from '@material-ui/core/CssBaseline'
import '../styles/globals.css'
import 'react-grid-layout/css/styles.css'

function MyApp({ Component, pageProps}) {
	
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-styles')
		if (jssStyles) {
			jssStyles?.parentElement?.removeChild(jssStyles)
		}
	}, [])

	return (
		<>
			<HeadProvider>
				<ThemeProvider theme={theme}>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<CssBaseline />
						<Component {...pageProps} />
					</MuiPickersUtilsProvider>
				</ThemeProvider>
			</HeadProvider>
		</>
	)
}

export default MyApp
