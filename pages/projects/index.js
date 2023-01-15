import Image from 'next/image'
import { useState } from 'react'

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/photos')
	const data = await res.json()

	return {
		props: {
			photos: data
		}
	}
}

const Projects = ({ photos }) => {
	const maxPerPage = 18;
	const pages = Math.ceil(photos.length / maxPerPage);
	let [displayPhotos, setDisplayPhotos] = useState([...photos.slice(0, maxPerPage)])
	
	return (
		<div>
			<h1>All Projects</h1>
			<div>
				{displayPhotos.map(photo => (
					<Image src={photo.url + '.png'} width={100} height={100} />
				))}
			</div>
		</div>
	)
}
export default Projects