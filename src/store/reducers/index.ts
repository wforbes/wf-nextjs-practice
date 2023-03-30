import { combineReducers } from 'redux'
import feedback from 'src/store/reducers/feedback'
import user from 'src/store/reducers/user/user.reducer'
import signup from 'src/store/reducers/signup/signup.reducer'

export default combineReducers({
	feedback,
	signup,
	user
})
