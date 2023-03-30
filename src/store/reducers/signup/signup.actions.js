import { createAction } from 'redux-actions'

export const ActionTypes = {
	setFormData: 'SIGNUP/SET_FORM_DATA'
}

const setFormData = createAction(ActionTypes.setFormData)

export const Actions = {
	setFormData
}
