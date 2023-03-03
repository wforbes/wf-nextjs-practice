import React, { useState, useEffect } from 'react'
import _ from 'lodash'
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
	const USERNAME_REQUIRED_MSG = 'Field is Required'
	const USERNAME_MIN_LEN = 3
	const USERNAME_MIN_LEN_MSG = `Must be at least ${USERNAME_MIN_LEN} chars`
	const USERNAME_MAX_LEN = 30
	const USERNAME_MAX_LEN_MSG = `Must be at most ${USERNAME_MAX_LEN} chars`
	const [formValues, setFormValues] = useState({
		username: { 
			value: '',
			validConditions: [],
			error: false,
			errorMsg: ''
		},
		email: { value: '', validConditions: [], error: false, errorMsg: '' },
		firstName: { value: '', validConditions: [], error: false, errorMsg: '' },
		lastName: { value: '', validConditions: [], error: false, errorMsg: '' },
		password: { value: '', validConditions: [], error: false, errorMsg: '' },
		repeatPassword: { value: '', validConditions: [], error: false, errorMsg: '' },
		allowExtraEmails: { value: false },
		conditionsSet: false
	})
	
	
	const setFormConditions = () => {
		return new Promise((resolve) => {
			setFormValues({
				...formValues,
				username: {
					...formValues.username,
					validConditions: [
						{
							test: (v) => !!v,
							msg: USERNAME_REQUIRED_MSG
						},
						{
							test: (v) => v.length > USERNAME_MIN_LEN,
							msg: USERNAME_MIN_LEN_MSG
						},
						{
							test: (v) => v.length < USERNAME_MAX_LEN,
							msg: USERNAME_MAX_LEN_MSG
						}
					],
				},
				conditionsSet: true
			})
			return resolve()
		})
		
	}

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
	
	useEffect(() => {
		if (!formValues.conditionsSet) setFormConditions()
	}, [])

	//TODO: is there a less verbose way than setting effect for every
	//	field individually?
	useEffect(() => {
		validateField('username')
	}, [formValues.username.value])
	useEffect(() => {
		validateField('email')
	}, [formValues.email.value])
	useEffect(() => {
		validateField('firstName')
	}, [formValues.firstName.value])
	useEffect(() => {
		validateField('lastName')
	}, [formValues.lastName.value])
	useEffect(() => {
		validateField('password')
	}, [formValues.password.value])
	useEffect(() => {
		validateField('repeatPassword')
	}, [formValues.repeatPassword.value])

	const validateField = (name) => {
		let newFormValue = _.cloneDeep(formValues[name]) //TODO: may be expensive
		let newErrorMsg = ''
		let error = false
		for (let condition of newFormValue.validConditions) {
			if (!condition.test(newFormValue.value)) {
				newErrorMsg = condition.msg
				error =  true
				break;
			}
		}
		if (error && newErrorMsg.length > 0) {
			setFormValues({
				...formValues,
				[name]: {
					...newFormValue,
					errorMsg: newErrorMsg,
					error
				}
			})
		} else if (newFormValue.error && newFormValue.errorMsg.length > 0) {
			setFormValues({
				...formValues,
				[name]: {
					...newFormValue,
					errorMsg: '',
					error
				}
			})
		}
	}

	const formIsValid = () => {
		let keys = Object.keys(formValues)
		let valid = true
		for (let i = 0; i < keys.length; i++) {
			if (
				typeof formValues[keys[i]] === 'object'
				&& formValues[keys[i]].hasOwnProperty('error')
				&& formValues[keys[i]].error
			) {
				valid = false
				break
			}
		}
		
		return valid
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

	/*
	const [username, setUsername] = useState('')
	const [usernameValid, setUsernameValid] = useState({
		error: false, errorMsg: ''
	})
	const [email, setEmail] = useState('')
	const [emailValid, setEmailValid] = useState({
		error: false, errorMsg: ''
	})
	const [firstName, setFirstName] = useState('')
	const [firstNameValid, setFirstNameValid] = useState({
		error: false, errorMsg: ''
	})
	const [lastName, setLastName] = useState('')
	const [lastNameValid, setLastNameValid] = useState({
		error: false, errorMsg: ''
	})
	const [password, setPassword] = useState('')
	const [passwordValid, setPasswordValid] = useState({
		error: false, errorMsg: ''
	})
	const [repeatPassword, setRepeatPassword] = useState('')
	const [repeatPasswordValid, setRepeatPasswordValid] = useState({
		error: false, errorMsg: ''
	})
	const [allowExtraEmails, setAllowExtraEmails] = useState(false)
	*/

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
								id="username"
								label="Username"
								name="username"
								autoComplete="username"
								onChange={(e) => onFieldChange(e.target)}
								error={!!formValues.username.error}
								helperText={
									formValues.username.error &&
									formValues.username.errorMsg
								}
								autoFocus
								variant="outlined"
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="email"
								label="Email Address"
								name="email"
								variant="outlined"
								fullWidth
								autoComplete="email"
								onChange={(e) => onFieldChange(e.target)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								id="firstName"
								label="First Name"
								name="firstName"
								variant="outlined"
								fullWidth
								autoComplete="fname"
								onChange={(e) => onFieldChange(e.target)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								id="lastName"
								label="Last Name"
								name="lastName"
								variant="outlined"
								fullWidth
								autoComplete="lname"
								onChange={(e) => onFieldChange(e.target)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								onChange={(e) => onFieldChange(e.target)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								fullWidth
								name="repeat-password"
								label="Repeat Password"
								type="password"
								id="repeat-password"
								onChange={(e) => onFieldChange(e.target)}
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
