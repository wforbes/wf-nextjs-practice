import { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core'

import { Actions } from 'src/store/reducers/signup/signup.actions'
import { useDispatch } from 'react-redux'

const ValidatedTextField = ({ validConditions, ...remainingProps}) => {
	const dispatch = useDispatch()
	const [loaded, setLoaded] = useState(false)
	const [fieldState, setFieldState] = useState({
		fieldName: remainingProps.name,
		value: '',
		validConditions: validConditions || [],
		error: false,
		errorMsg: ''
	})

	const onFieldChange = (input) => {
		setFieldState({
			...fieldState,
			'value': input.value
		})
	}

	useEffect(() => {
		if (!loaded) {
			setLoaded(true)
			return
		}
		validateField()
		console.log('fieldState', fieldState)
		dispatch(Actions.setFormData({...fieldState}))
	}, [fieldState.value])

	const validateField = () => {
		if (!fieldState.validConditions || fieldState.validConditions.length === 0) {
			return
		}
		let newState = _.cloneDeep(fieldState) //TODO: may be expensive?
		let newErrorMsg = ''
		let error = false
		for (let condition of newState.validConditions) {
			if (!condition.test(newState.value)) {
				newErrorMsg = condition.msg
				error =  true
				break;
			}
		}
		if (error && newErrorMsg.length > 0) {
			setFieldState({
				...newState,
				errorMsg: newErrorMsg,
				error
			})
		} else if (newState.error && newState.errorMsg.length > 0) {
			setFieldState({
				...newState,
				errorMsg: '',
				error
			})
		}
	}

	return (<TextField
		onChange={(e) => onFieldChange(e.target)}
		error={!!fieldState.error}
		helperText={
			fieldState.error &&
			fieldState.errorMsg
		}
		{...remainingProps}
	/>)
}

export default ValidatedTextField