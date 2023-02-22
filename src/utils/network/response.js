export const sendSuccessResponse = (_req, res, message, body, status) => {
	const statusCode = status || 200
	const statusMessage = message || ''
	const statusBody = body || {}

	res.status(statusCode).send({
		status: statusCode,
		message: statusMessage,
		body: statusBody,
	})
}

export const sendErrorResponse = (_req, res, error) => {
	let statusCode = error.status || 500
	let statusMessage = ''
	let details = ''
	let noData = null
	let expirationError = null
	let unexpected = null
	let isWarning = null

	if (error.semantic) {
		statusMessage = error.semantic
		details = error.details
		noData = error.noData
		expirationError = error.expirationError
		unexpected = error.unexpected
	}

	if (error.data && !statusMessage) {
		statusMessage = error.data.message || error.data.error
	}

	if (!statusMessage) {
		statusMessage = 'Internal server error'
		details = error.message
	}

	if (error.code) {
		statusMessage = `${error.code}: `
		details = error.details
	}

	res.status(statusCode).send({
		status: statusCode,
		message: statusMessage,
		details,
		noData,
		expirationError,
		unexpected,
		isWarning,
	})
}

export const getErrorType = (error) => {
	if (error.response) {
		if (error.response.data) {
			return { ...error.response.data, status: error.response.status }
		}
		return error.response
	}
	if (error.request) {
		return error.request
	}
	return error
}