import { handleAction } from 'redux-actions'
import { Actions } from './signup.actions'


const initialState = {
	fields: [],
	isValid: false
}

const setFormData = handleAction(
	Actions.setFormData,
	(state, { payload }) => {
		console.log('setFormData')
		console.log('state', state)
		console.log('payload', payload)
		if (!payload?.fieldName) return {...state}
		let index = state.fields.findIndex((item) => {
			console.log('looking for', payload.fieldName, 'on', item.fieldName)
			return item.fieldName === payload.fieldName
		})
		console.log('index found', index)
		if (index === -1){
			state.fields.push(payload)
			index = state.fields.length - 1;
		} else {
			state.fields[index] = { ...validateField({...state.fields[index], ...payload }) }
			if (state.fields[index].error){
				state.isValid = false
			}
		}
		
		state = validateForm(state)
		console.log('state.fields[idx]', state.fields[index])
		return {...state}
	},
	initialState
)

const validateField = (fieldState) => {
	if (!fieldState?.validConditions || fieldState?.validConditions.length === 0) {
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
		return {
			...newState,
			errorMsg: newErrorMsg,
			error
		}
	} else if (newState.error && newState.errorMsg.length > 0) {
		return {
			...newState,
			errorMsg: '',
			error
		}
	}
	return {...newState}
}

const validateForm = (state) => {
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
	//console.log(isValid)
	return {
		...state,
		isValid
	}
}

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