// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { setup } from './infrastructure'

export default async function handler (req, res) {
	await setup()
	
	res.status(200).json({ mongoStatus: true })
}
