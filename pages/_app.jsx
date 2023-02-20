import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import withReduxStore from 'src/components/hocs/withReduxStore'
import HeadProvider from 'src/components/providers/HeadProvider/HeadProvider'
import theme from 'src/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import CssBaseline from '@material-ui/core/CssBaseline'
import '../styles/globals.css'
import 'react-grid-layout/css/styles.css'


class MyApp extends App {
	
	componentDidMount() {
		const jssStyles = document.querySelector('#jss-server-styles')
		if (jssStyles) {
			jssStyles?.parentElement?.removeChild(jssStyles)
		}
	}

	render() {
		const { Component, pageProps, reduxStore } = this.props

		return (
			<Provider store={reduxStore}>
				<HeadProvider>
					<ThemeProvider theme={theme}>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<CssBaseline />
							<Component {...pageProps} />
						</MuiPickersUtilsProvider>
					</ThemeProvider>
				</HeadProvider>
			</Provider>
		)
	}
}

export default withReduxStore(MyApp)
