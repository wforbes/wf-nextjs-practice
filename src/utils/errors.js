export const getErrorType = (error) => {
	if (error.response) {
		//console.log('error has response', error.response)
		if (error.response.data) {
			//console.log('error response has data', error.response.data)
			return {...error.response.data, status: error.response.status }
		}
		return error.response
	}
	if (error.request) {
		//console.log('error has request', error.request)
		return error.request
	}
	//console.log('error defaulted', error)
	return error
}