import { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core'

import { Actions } from 'src/store/reducers/signup/signup.actions'
import { useDispatch, connect } from 'react-redux'

const ValidatedTextField = ({ validConditions, fieldState, ...remainingProps}) => {
	let { dispatch, ...props } = remainingProps; // spread connect's dispatch out of props
	//	to avoid react warning about passing it to TextField
	dispatch = useDispatch() // replace it with useDispatch output
	const [loaded, setLoaded] = useState(false)

	const initialFieldState = {
		fieldName: remainingProps.name,
		value: '',
		validConditions: validConditions || [],
		error: false,
		errorMsg: ''
	}

	const onFieldChange = (input) => {
		//console.log('onFieldChange, value', input.value)
		//console.log('onFieldChange, fieldState', fieldState)
		dispatch({
			type: Actions.setFormData,
			payload: {
				fieldName: remainingProps.name,
				value: input.value
			}
		})
	}

	useEffect(() => {
		if (!loaded) {
			setLoaded(true)
			//console.log('dispatching initialFieldState', initialFieldState)
			dispatch({
				type: Actions.setFormData,
				payload: initialFieldState
			})
			return
		}
	}, [])

	return (<TextField
		onChange={(e) => onFieldChange(e.target)}
		error={!!fieldState?.error}
		helperText={
			fieldState?.error &&
			fieldState?.errorMsg
		}
		{...props}
	/>)
}

const mapStateToProps = (state, ownProps) => {
	//console.log(ownProps)
	return {
		fieldState: state.signup.fields.find(
			(f) => f.fieldName === ownProps.name
		),
		...ownProps
	}
}

export default connect(mapStateToProps)(ValidatedTextField)