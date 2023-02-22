import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { sendErrorResponse } from 'src/utils/network/response'
import errorMessages from 'src/constants/messages/error'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const {method, body: { firstName, lastName, email, password, repeatPassword }} = req
	try {
		console.log('got signup request...')
		switch (method) {
			case 'POST': {
				return await signup(firstName, lastName, email, password)
			}
			default: {
				sendErrorResponse(null, res, new Error(errorMessages.urlNotFound))
			}
		}
	} catch (error) {
		sendErrorResponse(null, res, new Error(errorMessages.generic))
	}
}

async function signup(firstName: string, lastName: string, email: string, password: string) {
	const {
		data: {
			userObj
		}
	} = await axios.post('localhost:4201/user/signup', {
		firstName, lastName, email, password
	})
	// ...
	return userObj
}