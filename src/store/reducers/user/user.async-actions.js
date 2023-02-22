import axios, { AxiosError } from 'axios'
import { Actions as FeedbackActions } from 'src/store/reducers/feedback/actions'
import { getErrorType } from 'src/utils/errors'
import { Actions } from 'src/store/reducers/user/user.actions'

const apiPrefix = '/api/user'

export const asyncSignup = ({
	firstName, lastName, email,
	password, repeatPassword
}) => async (dispatch) => {
	try {
		console.log(
			'signing up...', 
			{ firstName, lastName, email, password, repeatPassword }
		)
		//TODO: use axios to hit the server and make the sign up,
		//	then setCurrentUser with the data from the server

		dispatch(FeedbackActions.setIsLoading({ isLoading: true }))
		const { data: { body: user } } = await axios.post(`${apiPrefix}/signup`, {
			firstName, lastName,
			email, password,
			repeatPassword
		})
		console.log(user)
		user = { id: 1, firstName, lastName, email }

		dispatch(Actions.setCurrentUser({
			...user
		}))
	} catch (error) {
		console.log(error)
		//TODO: dispatch feedback to display message

		const { message, details } = getErrorType(error)
		console.log(message, details)
		dispatch(FeedbackActions.setFeedback({
			message: `${message}. ${details}`,
			type: 'error'
		}))
	} finally {
		dispatch(FeedbackActions.setIsLoading({ isLoading: false }))
	}
}