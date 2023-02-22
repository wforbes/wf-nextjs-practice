import { handleAction } from 'redux-actions'
import { Actions } from './actions'

let setLoadingTrueCount = 0

const initialState = {
	message: '',
	type: '',
	isLoading: false,
	hideOnClickAway: true,
	autoHideDuration: 6000
}

const setFeedback = handleAction(
	Actions.setFeedback,
	(state, {
		payload: {
			message, type, extraActionLabel, onExtraActionTrigger
		}
	}) => ({
		...state,
		message,
		type,
		extraActionLabel,
		onExtraActionTrigger
	}),
	initialState
)

const setIsLoading = handleAction(
	Actions.setIsLoading,
	(state, { payload: { isLoading } }) => {
		if (isLoading === true) {
			setLoadingTrueCount += 1
			return { ...state, isLoading }
		}
		setLoadingTrueCount -= 1
		if (setLoadingTrueCount <= 0) {
			setLoadingTrueCount = 0
			return { ...state, isLoading: false }
		}
		return state
	},
	initialState
)

const FeedbackReducer = (state = initialState, action) => {
	let currentState = setFeedback(state, action)
	currentState = setIsLoading(currentState, action)
	return currentState
}
export default FeedbackReducer