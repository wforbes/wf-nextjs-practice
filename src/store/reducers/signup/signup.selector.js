export const getFieldData = (state) => {
	console.log('signup fieldData selector', state)
	return state.fields
}
export const getFormIsValid = (state) => {
	console.log('signup isValid selector', state)
	return state.isValid
}

export default getFieldData
