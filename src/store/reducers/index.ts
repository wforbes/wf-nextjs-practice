import { combineReducers } from 'redux'
import feedback from 'src/store/reducers/feedback'
import user from 'src/store/reducers/user/user.reducer'

export default combineReducers({
	feedback,
	user
})
