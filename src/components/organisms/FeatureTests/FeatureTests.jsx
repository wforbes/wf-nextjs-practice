import React, { useState, useEffect } from 'react'
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Box,
	Grid,
	Typography,
	Container
} from '@material-ui/core'
import { CodeOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import { useDispatch, useSelector } from 'react-redux'
import { Actions as FeedbackActions } from 'src/store/reducers/feedback/actions'
import { getIsLoading } from 'src/store/reducers/feedback/selectors'

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	featureBtnContainer: {
		margin: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	featureBtnRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%'
	},
	wtf: {
		display: 'flex'
	}
}));

const FeatureTests = () => {
	const classes = useStyles()
	
	const dispatch = useDispatch()
	const showSnackbar = () => {
		dispatch(FeedbackActions.setFeedback({
			message: 'Testing...',
			type: 'error'
		}))
	}

	const isLoading = useSelector(getIsLoading)
	const loadingTestDuration = 5
	const [ loadingCountdown, setLoadingCountdown] = useState(loadingTestDuration)
	const [countingDown, setCountingDown] = useState(false)
	
	useEffect(() => {
		console.log(countingDown, loadingCountdown)
		if (!countingDown || loadingCountdown > 0) {
			return
		}
		setTimeout(() => {
			if (loadingCountdown <= 0) {
				dispatch(FeedbackActions.setIsLoading({
					isLoading: false
				}))
				setCountingDown(false)
				return
			}
			setLoadingCountdown(loadingCountdown - 1)
		}, 1000)
	}, [countingDown, loadingCountdown])

	const showLoading = () => {
		dispatch(FeedbackActions.setIsLoading({
			isLoading: true
		}))
		setCountingDown(true)
		console.log(countingDown)
	}
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<CodeOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Feature Tests
				</Typography>
				<Grid container spacing={2} className={classes.featureBtnContainer}>
					<Grid item xs={12} sm={12} className={classes.featureBtnRow}>
						<Button
							fullWidth
							variant="contained"
							color="primary"
							onClick={showLoading}
						>
							{isLoading ? 
								`Loading State Active (${loadingCountdown})`
								: 'Show Loading State'
							}
						</Button>
						
					</Grid>
					<Grid item xs={12} sm={12} className={classes.featureBtnRow}>
						<Button
							fullWidth
							variant="contained"
							color="primary"
							onClick={showSnackbar}
						>
							Show Snackbar
						</Button>
					</Grid>
				</Grid>
			</div>
		</Container>
	);
}

export default FeatureTests
