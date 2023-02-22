import { createAction } from 'redux-actions'

export const ActionTypes = {
	setFeedback: 'FEEDBACK/SET_FEEDBACK',
	setIsLoading: 'FEEDBACK/SET_IS_LOADING'
}

const setFeedback = createAction(ActionTypes.setFeedback)
const setIsLoading = createAction(ActionTypes.setIsLoading)

export const Actions = {
	setFeedback,
	setIsLoading
}
