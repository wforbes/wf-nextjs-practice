import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import theme from 'src/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import CssBaseline from '@material-ui/core/CssBaseline'
import '../styles/globals.css'
import 'react-grid-layout/css/styles.css'


const getPathName = () => {
	const router = useRouter()
	let displayPath = router.pathname.substring(1, router.pathname.length)
	if (displayPath.length === 0) return "Home"
	return displayPath[0].toLocaleUpperCase() + displayPath.substring(1, displayPath.length)
}

function MyApp({ Component, pageProps}) {
	
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-styles')
		if (jssStyles) {
			jssStyles?.parentElement?.removeChild(jssStyles)
		}
	}, [])

	return (
		<>
			<Head>
				<title>{`wf-nextjs-practice | ${getPathName()}`}</title>
			</Head>
			<ThemeProvider theme={theme}>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<CssBaseline />
					<Component {...pageProps} />
				</MuiPickersUtilsProvider>
			</ThemeProvider>
		</>
	)
}

export default MyApp
