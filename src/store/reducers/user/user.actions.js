import { createAction } from 'redux-actions'

export const ActionTypes = {
	setCurrentUser: 'USER/SET_USER_DATA'
}

const setCurrentUser = createAction(ActionTypes.setCurrentUser)

export const Actions = {
	setCurrentUser
}
