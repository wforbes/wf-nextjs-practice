import axios from 'axios'
//import { Actions as FeedbackActions } from 'src/store/reducers/feedback/feedback.actions'
//import { getErrorType } from 'utils/general'
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
		dispatch(Actions.setCurrentUser({
			id: '1',
			firstName, lastName, email
		}))
	} catch (error) {
		if (error.response) {
			//TODO: dispatch feedback to display message
			console.error(error)
		}
	}
}