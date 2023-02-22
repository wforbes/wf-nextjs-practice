import React, { useState, useEffect } from 'react'
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	FormControl,
	InputLabel,
	Box,
	Typography,
	Container,
	MenuItem,
	Paper
	
} from '@material-ui/core'
import { CodeOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import { useDispatch, useSelector } from 'react-redux'
import { Actions as FeedbackActions } from 'src/store/reducers/feedback/actions'
import { getIsLoading } from 'src/store/reducers/feedback/selectors'
import Select from '@material-ui/core/Select'

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
	featurePaper: {
		marginTop: '1em',
		marginBottom: '1em'
	},
	featureBtnContainer: {
		margin: theme.spacing(2),
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	featureBoxRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	featureBoxRowItem: {
		margin: '1em',
		display: 'flex'
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 180,
	}
}));

const FeatureTests = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	const isLoading = useSelector(getIsLoading)
	const [loadingTestDuration, setLoadingDuration] = useState(5)
	const [loadingDurationInvalid, setLoadingDurationInvalid] = useState(false)
	const [loadingDurationHelperTxt, setLoadingDurationHelperTxt] = useState('')
	const loadingDurationInvalidTxt = "Integer required"
	const loadingDurationTooHigh = "Integer less than 20 required"
	const loadingDurationTooLow = "Integer greater than 0 required"
	const handleLoadingDurationChange = (e) => {
		let value = e.target.value
		console.log(isFinite(value))
		if (!isFinite(value) || !isFinite(parseInt(value))) {
			setLoadingDurationHelperTxt(loadingDurationInvalidTxt)
			setLoadingDurationInvalid(true)
			setLoadingDuration(value)
			return
		}

		if (parseInt(value) > 20) {
			setLoadingDurationHelperTxt(loadingDurationTooHigh)
			setLoadingDurationInvalid(true)
			setLoadingDuration(value)
			return
		}

		if (parseInt(value) < 1) {
			setLoadingDurationHelperTxt(loadingDurationTooLow)
			setLoadingDurationInvalid(true)
			setLoadingDuration(value)
			return
		}

		setLoadingDurationHelperTxt('')
		setLoadingDurationInvalid(false)
		setLoadingDuration(value)
	}

	const [ loadingCountdown, setLoadingCountdown] = useState(loadingTestDuration)
	const [countingDown, setCountingDown] = useState(false)
	
	useEffect(() => {
		if (!countingDown || loadingCountdown <= 0) {
			return
		}
		setTimeout(() => {
			if (loadingCountdown <= 1) {
				dispatch(FeedbackActions.setIsLoading({
					isLoading: false
				}))
				setCountingDown(false)
				setLoadingCountdown(loadingTestDuration)
				return
			}
			setLoadingCountdown(loadingCountdown - 1)
		}, 1000)
	}, [countingDown, loadingCountdown])

	const showLoading = () => {
		if (loadingDurationInvalid) return
		dispatch(FeedbackActions.setIsLoading({
			isLoading: true
		}))
		setCountingDown(true)
	}

	const [snackbarMsg, setSnackbarMsg ] = useState('')
	const snackbarTypes = [
		'success', 'warning', 'error', 'info'
	]
	const [selectedSnackbarType, setSelectedSnackbarType] = useState('')
	const showSnackbar = () => {
		let message = snackbarMsg !== '' ? snackbarMsg : 'Testing...'
		if (!selectedSnackbarType || selectedSnackbarType.length === 0) return;
		dispatch(FeedbackActions.setFeedback({
			message,
			type: selectedSnackbarType
		}))
	}

	return (
		<Container component="main" maxWidth="md">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<CodeOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Feature Tests
				</Typography>
				<Paper elevation={3} className={classes.featurePaper}>
					<Box className={classes.featureBoxRow}>
						<TextField
							className={classes.featureBoxRowItem}
							variant="outlined"
							id="loadingDurationTxt"
							label="Loading Test Duration"
							name="loadingDurationTxt"
							value={loadingTestDuration}
							onChange={handleLoadingDurationChange}
							error={loadingDurationInvalid}
							helperText={loadingDurationHelperTxt}
						/>
						<Button
							className={classes.featureBoxRowItem}
							variant="contained"
							color="primary"
							onClick={showLoading}
						>
							{isLoading ? 
								`Loading State Active (${loadingCountdown})`
								: 'Show Loading State'
							}
						</Button>		
					</Box>
				</Paper>
				<Paper elevation={3}>
					<Box className={classes.featureBoxRow}>	
						<TextField
							className={classes.featureBoxRowItem}
							variant="outlined"
							id="snackbarMsgTxt"
							label="Snackbar Message"
							name="snackbarMsgTxt"
							onChange={(e) => setSnackbarMsg(e.target.value)}
						/>
						<FormControl className={classes.formControl}>
							<InputLabel id="snackbarTypeLabel">
								Snackbar Type
							</InputLabel>
							<Select
								id="snackbarTypeSelect"
								labelId="snackbarTypeLabel"
								value={selectedSnackbarType}
								onChange={(e) => setSelectedSnackbarType(e.target.value)}
							>
								{snackbarTypes.length > 0 &&
									snackbarTypes.map((type) => {
										return (
											<MenuItem
												value={type}
												key={`sbtype-${type}`}
											>
												{type}
											</MenuItem>
										)
									})
								}
								
							</Select>
						</FormControl>
						<Button
							className={classes.featureBoxRowItem}
							variant="contained"
							color="primary"
							onClick={showSnackbar}
						>
							Show Snackbar
						</Button>
					</Box>
				</Paper>
			</div>
		</Container>
	);
}

export default FeatureTests
