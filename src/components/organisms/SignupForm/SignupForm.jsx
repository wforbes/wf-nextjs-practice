import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import {
	Avatar,
	Button,
	CssBaseline,
	//TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Grid,
	Typography,
	Container
} from '@material-ui/core'
import ValidatedTextField from 'src/components/molecules/ValidatedTextField/ValidatedTextField'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './SignupForm.styles'
//import SignupFormValidator from './SignupFormValidator'
import { useDispatch, useSelector } from 'react-redux'
import { asyncSignup } from 'src/store/reducers/user/user.async-actions'
import { Actions } from 'src/store/reducers/signup/signup.actions'


const SignupForm = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	const formState = useSelector((state) => state.signup)

	const [formValues, setFormValues] = useState({
		allowExtraEmails: { value: false },
		conditionsSet: false
	})
	
	const onFieldChange = (input) => {
		const { name, value } = input
		
		setFormValues({
			...formValues,
			[name]: {
				...formValues[name],
				value
			}
		})
	}
	
	const _formIsValid = () => {
		dispatch(Actions.formIsValid())
		console.log('valid', formState)
		return false
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!_formIsValid()) return;
		dispatch(asyncSignup({
			username,
			email,
			firstName,
			lastName,
			password,
			repeatPassword,
			allowExtraEmails
		}))
	}

	const USERNAME_REQUIRED_MSG = 'Field is Required'
	const USERNAME_MIN_LEN = 3
	const USERNAME_MIN_LEN_MSG = `Must be at least ${USERNAME_MIN_LEN} chars`
	const USERNAME_MAX_LEN = 30
	const USERNAME_MAX_LEN_MSG = `Must be at most ${USERNAME_MAX_LEN} chars`
	const usernameValidConditions = [
		{
			test: (v) => !!v,
			msg: USERNAME_REQUIRED_MSG
		},
		{
			test: (v) => v.length >= USERNAME_MIN_LEN,
			msg: USERNAME_MIN_LEN_MSG
		},
		{
			test: (v) => v.length <= USERNAME_MAX_LEN,
			msg: USERNAME_MAX_LEN_MSG
		}
	];

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			{/* <SignupFormValidator formValues={ formValues } setFormValues={ setFormValues } /> */}
			<div className={classes.paper}>
				<div className={classes.profile}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
				</div>
				<form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<ValidatedTextField
								id="username"
								label="Username"
								name="username"
								autoComplete="username"
								autoFocus
								variant="outlined"
								fullWidth
								validConditions={ usernameValidConditions }
							/>
						</Grid>
						<Grid item xs={12}>
							<ValidatedTextField
								id="email"
								label="Email Address"
								name="email"
								variant="outlined"
								fullWidth
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<ValidatedTextField
								id="firstName"
								label="First Name"
								name="firstName"
								variant="outlined"
								fullWidth
								autoComplete="fname"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<ValidatedTextField
								id="lastName"
								label="Last Name"
								name="lastName"
								variant="outlined"
								fullWidth
								autoComplete="lname"
							/>
						</Grid>
						<Grid item xs={12}>
							<ValidatedTextField
								variant="outlined"
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
							/>
						</Grid>
						<Grid item xs={12}>
							<ValidatedTextField
								variant="outlined"
								fullWidth
								name="repeat-password"
								label="Repeat Password"
								type="password"
								id="repeat-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox
										value={formValues.allowExtraEmails.value}
										color="primary"
										onChange={(e) => onFieldChange(e.target)}
									/>
								}
								label="I want to receive news and updates via email."
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
					Sign Up
					</Button>
					<Grid container justify="flex-end">
					<Grid item>
						<Link href="#" variant="body2">
							Already have an account? Login instead
						</Link>
					</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}

export default SignupForm
