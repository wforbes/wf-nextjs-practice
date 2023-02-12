import React from 'react'
import Document, { Head, Main, Html, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import env from '../env'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="description" content="Practice project meant to build skills in Next.js and React" />
					<meta name="theme-color" content="#00d2ff" />
					<link rel="manifest" href="/manifest.json" />
					<link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
				<script
					async
					defer
					src={`${this.props.googleApiUrl}?key=${this.props.googleApiKey}&libraries=places`}
				></script>
			</Html>
		)
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const sheets = new ServerStyleSheets()
	const originalRenderPage = ctx.renderPage
	ctx.renderPage = () => originalRenderPage({
		enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
	})
	const initialProps = await Document.getInitialProps(ctx)
	return {
		...initialProps,
		googleApiKey: env.googleApiKey,
		googleApiUrl: env.googleApiUrl,
		styles: [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement()
		]
	}
}
