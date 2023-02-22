import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import useStyles from './CircularLoader.styles'

const CircularLoader = () => {
	const styles = useStyles()

	return (
		<Backdrop open className={styles.backdrop}>
			<CircularProgress color="inherit" />
		</Backdrop>
	)
}

export default CircularLoader
