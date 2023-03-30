import { createAction } from 'redux-actions'

export const ActionTypes = {
	setFormData: 'SIGNUP/SET_FORM_DATA',
	formIsValid: 'SIGNUP/FORM_IS_VALID'
}

const setFormData = createAction(ActionTypes.setFormData)
const formIsValid = createAction(ActionTypes.formIsValid)

export const Actions = {
	setFormData,
	formIsValid
}
