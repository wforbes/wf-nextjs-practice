import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/globals.css'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from 'src/theme'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

function MyApp({ Component, pageProps }: AppProps) {
  return (
	<Layout>
		<ThemeProvider theme={theme}>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Component {...pageProps} />
			</MuiPickersUtilsProvider>
		</ThemeProvider>
	</Layout>
  )
}

export default MyApp
