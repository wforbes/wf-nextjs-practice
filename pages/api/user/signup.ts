import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import { sendSuccessResponse, sendErrorResponse } from 'src/utils/network/response'
import errorMessages from 'src/constants/messages/error'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const {method, body: { firstName, lastName, email, password, repeatPassword }} = req
	console.log('got signup request...')
	try {
		switch (method) {
			case 'POST': {
				const user = await signup(firstName, lastName, email, password)
				sendSuccessResponse(req, res, 'user', user, 200)
				break
			}
			default: break
		}	
	} catch (error) {
		sendErrorResponse(null, res, new Error(errorMessages.generic))
	}
}

async function signup(firstName: string, lastName: string, email: string, password: string) {
	console.log('hit signup func')
	try {
		const { data: user } = await axios.post('http://localhost:4201/user/signup', {
			firstName, lastName, email, password
		})
		console.log('got user', user)
		return user
	} catch (error) {
		throw error
	}
}