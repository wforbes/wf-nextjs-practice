import { handleAction } from 'redux-actions'
import { Actions } from './signup.actions'

const initialState = {
	fields: [],
	isValid: true
}

const setFormData = handleAction(
	Actions.setFormData,
	(state, { payload }) => {
		console.log('setFormData')
		console.log('state', state)
		console.log('payload', payload)
		
		let index = state.fields.findIndex((item) => item.fieldName === payload.fieldName)
		
		if (index === -1){
			state.fields.push(payload)
		} else {
			state.fields[index] = payload
		}
			
		return [...state]
	},
	initialState
)

const formIsValid = handleAction(
	Actions.formIsValid,
	(state, { payload }) => {
		console.log('formIsValid')
		console.log('state', state)
		console.log('payload', payload)
		let isValid = true
		for (let i = 0; i < state.fields.length; i++){
			if (
				typeof state.fields[i] === 'object'
				&& state.fields[i].hasOwnProperty('error')
				&& state.fields[i].error
			){
				isValid = false
				break
			}
		}
		console.log(isValid)
		return {
			...state,
			isValid
		}
	},
	initialState
)


const signupReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.setFormData:
			return setFormData(state, action)
		case Actions.formIsValid:
			return formIsValid(state, action)
		default:
			return state
	}
}

export default signupReducer