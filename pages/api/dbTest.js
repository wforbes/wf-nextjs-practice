// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import createDbConnection from './database/connect'

export default async function handler (req, res) {
	const { client, db } = await createDbConnection()
	console.log(client)
	console.log(db)
	
	res.status(200).json({ mongoStatus: true })
	
	client.close()
}
