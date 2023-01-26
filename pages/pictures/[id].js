import { useRouter } from 'next/router'
import Link from 'next/link'

// fetches data to get all the picture ids
//	and generate the routes and pages on the server
//	based on them
export const getStaticPaths = async () => {
	const photoRes = await fetch(`https://jsonplaceholder.typicode.com/photos`)
	const photoData = await photoRes.json()

	const paths = photoData.map(photo => ({
		params: {
			id: photo.id.toString()
		}
	}))

	return { paths, fallback: false }
}

// runs for every photo details page being generated
//	with the getStaticPaths function, using
//	the object returned from it as the context param
//	to get the related data into the Details component
export const getStaticProps = async (context) => {
	const id = context.params.id
	const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
	const data = await response.json()

	return {
		props: { photo: data }
	}
}

const PhotoDetails = ({ photo }) => {
	const router = useRouter()
	const getPreviousPath = () => router.asPath.slice(0, router.asPath.lastIndexOf('/'))

	return ( 
		<div>
			<div>
				<Link href={getPreviousPath()}>
					&lt;- Back to pictures
				</Link>
			</div>
			<h1>Picture Details</h1>
			<div>
				<ul>
					<li><strong>ID</strong>: {photo.id}</li>
					<li><strong>Title</strong>: {photo.title}</li>
					<li><strong>URL</strong>: {photo.url}</li>
					<li><strong>thumbnailUrl</strong>: {photo.thumbnailUrl}</li>
				</ul>
			</div>
		</div>
	 );
}
 
export default PhotoDetails;