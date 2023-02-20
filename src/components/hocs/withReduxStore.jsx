import React from 'react'
import store from 'src/store'

const withReduxStore = (Component) => class ComponentWithRedux extends React.Component {
	static async getInitialProps(ctx) {
		ctx.ctx.reduxStore = store

		let componentProps = {}
		if (typeof Component.getInitialProps === 'function') {
			componentProps = await Component.getInitialProps(ctx)
		}
		return {
			...componentProps,
			initialReduxState: store.getState()
		}
	}

	constructor(props) {
		super(props)
		this.reduxStore = store
	}

	render() {
		return <Component {...this.props} reduxStore={this.reduxStore} />
	}
}

export default withReduxStore