import React, { useState } from 'react'
import {
	Avatar,
	Button,
	CssBaseline,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Grid,
	Typography,
	Container
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './SignupForm.styles'

import { useDispatch } from 'react-redux'
import { asyncSignup } from 'src/store/reducers/user/user.async-actions'


const SignupForm = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	
	const formIsValid = () => {
		//TODO
		//validateRequiredFields()
		return true
	}

	const validateRequiredFields = () => {
		return !_.isEmpty(userData.email)
		|| !_.isEmpty(userData.password)
		|| !!userData.firstName
		|| !!userData.lastName
	}


	const handleSubmit = (e) => {
		e.preventDefault()
		if (!formIsValid()) return;
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

	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [allowExtraEmails, setAllowExtraEmails] = useState(false)

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
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
							<TextField
								variant="outlined"
								required
								fullWidth
								id="username"
								label="Username"
								name="username"
								autoComplete="username"
								autoFocus
								onChange={(e) => setUsername(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="email"
								label="Email Address"
								name="email"
								variant="outlined"
								required
								fullWidth
								autoComplete="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								id="firstName"
								label="First Name"
								name="firstName"
								variant="outlined"
								required
								fullWidth
								autoComplete="fname"
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								id="lastName"
								label="Last Name"
								name="lastName"
								variant="outlined"
								required
								fullWidth
								autoComplete="lname"
								onChange={(e) => setLastName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="repeat-password"
								label="Repeat Password"
								type="password"
								id="repeat-password"
								onChange={(e) => setRepeatPassword(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox
										value={allowExtraEmails}
										color="primary"
										onChange={(e) => setAllowExtraEmails}
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
							Already have an account? Sign in
						</Link>
					</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}

export default SignupForm
