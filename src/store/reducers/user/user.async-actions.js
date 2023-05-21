import axios from 'axios'
import { Actions as FeedbackActions } from 'src/store/reducers/feedback/actions'
import { getErrorType } from 'src/utils/errors'
import { Actions } from 'src/store/reducers/user/user.actions'

const apiPrefix = '/api/user'

export const asyncSignup = ({
	username, email,
	firstName, lastName,
	password, repeatPassword
}) => async (dispatch) => {
	console.log('user async actions')

	try {
		console.log(
			'signing up...', 
			{ username, email, firstName, lastName,  password, repeatPassword }
		)

		dispatch(FeedbackActions.setIsLoading({ isLoading: true }))
		let { data: user } = await axios.post(`${apiPrefix}/signup`, {
			username, email,
			firstName, lastName,
			password, repeatPassword
		})
		
		console.log('after front-post')
		console.log(user) //TODO: set currentUser with data from server
		user = { id: 1, firstName, lastName, email }

		dispatch(Actions.setCurrentUser({
			...user
		}))
	} catch (error) {
		const { message, details } = getErrorType(error)
		dispatch(FeedbackActions.setFeedback({
			message: `[${message}] ${details}`,
			type: 'error'
		}))
	} finally {
		dispatch(FeedbackActions.setIsLoading({ isLoading: false }))
	}
}