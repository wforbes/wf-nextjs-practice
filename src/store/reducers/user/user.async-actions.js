import axios from 'axios'
import { Actions as FeedbackActions } from 'src/store/reducers/feedback/actions'
import { getErrorType } from 'src/utils/errors'
import { Actions } from 'src/store/reducers/user/user.actions'

const apiPrefix = '/api/user'

export const asyncSignup = ({
	firstName, lastName, email,
	password, repeatPassword
}) => async (dispatch) => {
	try {
		/*
		console.log(
			'signing up...', 
			{ firstName, lastName, email, password, repeatPassword }
		)*/

		dispatch(FeedbackActions.setIsLoading({ isLoading: true }))
		const { data: { body: user } } = await axios.post(`${apiPrefix}/signup`, {
			firstName, lastName,
			email, password,
			repeatPassword
		})
		
		//console.log(user) //TODO: set currentUser with data from server
		user = { id: 1, firstName, lastName, email }

		dispatch(Actions.setCurrentUser({
			...user
		}))
	} catch (error) {
		const { message, details } = getErrorType(error)
		dispatch(FeedbackActions.setFeedback({
			message: `${message}. ${details}`,
			type: 'error'
		}))
	} finally {
		dispatch(FeedbackActions.setIsLoading({ isLoading: false }))
	}
}