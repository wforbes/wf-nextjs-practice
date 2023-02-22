import Http from 'http'
import Express, { Request as IRequest, Response as IResponse } from 'express'
import Next from 'next'

const nextApp = Next({})
const nextRequestHandler = nextApp.getRequestHandler()

function handleRequest(req: IRequest, res: IResponse) {
	return nextRequestHandler(req, res)
}

nextApp.prepare().then(() => {
	const port = process.env.PORT
	const expressServer = Express()
	expressServer.get('*', handleRequest)
	expressServer.post('*', handleRequest)
	expressServer.put('*', handleRequest)
	expressServer.delete('*', handleRequest)
	Http.createServer(expressServer).listen(port, () => {
		console.log(`next server listening on port ${port}`)
	}).on('error', (error: Error) => {
		console.error(error)
		process.exit(1)
	})
})