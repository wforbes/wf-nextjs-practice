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
import { makeStyles } from '@material-ui/core/styles'

import { useDispatch } from 'react-redux'
import { asyncSignup } from 'src/store/reducers/user/user.async-actions'

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
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SignupForm = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	

	const handleSubmit = (e) => {
		e.preventDefault()
		
		dispatch(asyncSignup({
			firstName,
			lastName,
			email,
			password,
			repeatPassword
		}))
	}

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
					<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							autoComplete="fname"
							name="firstName"
							variant="outlined"
							required
							fullWidth
							id="firstName"
							label="First Name"
							autoFocus
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							variant="outlined"
							required
							fullWidth
							id="lastName"
							label="Last Name"
							name="lastName"
							autoComplete="lname"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							onChange={(e) => setEmail(e.target.value)}
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
							control={<Checkbox value="allowExtraEmails" color="primary" />}
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
