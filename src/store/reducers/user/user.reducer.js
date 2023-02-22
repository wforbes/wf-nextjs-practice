import { handleAction } from 'redux-actions'
import { Actions } from './user.actions'

const initialState = {
	id: '', firstName: '', lastName: '', email: ''
}

const setCurrentUser = handleAction(
	Actions.setCurrentUser,
	(state, { payload }) => ({ ...state, ...payload}),
	initialState
)

const userReducer = (state = initialState, action) => {
	let currentState = setCurrentUser(state, action)
	return currentState
}

export default userReducer