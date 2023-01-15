import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Pictures.module.css'

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
	const maxPerPage = 16;
	const pages = Math.ceil(photos.length / maxPerPage);
	let [displayPhotos, setDisplayPhotos] = useState([...photos.slice(0, maxPerPage)])
	let [currentPage, setCurrentPage] = useState(1)
	const incrementPage = () => setCurrentPage(() => (currentPage+1))
	const decrementPage = () => setCurrentPage(() => (currentPage-1))
	
	const navPrevPage = () => {
		if (currentPage === 1) return;
		decrementPage()
		let newPage = currentPage - 1 //hook won't update in time, get new page number
		// get display photo set with one less than new page number to account for zeroth element offset
		setDisplayPhotos(() => ([...photos.slice((newPage-1)*maxPerPage, (newPage-1)*maxPerPage+maxPerPage)]))
	}

	const navNextPage = () => {
		if (currentPage === pages) return;
		incrementPage()
		setDisplayPhotos([...photos.slice(currentPage*maxPerPage, currentPage*maxPerPage+maxPerPage)])
	}

	return (
		<div>
			<h1>Pictures</h1>
			<div className={styles.thumbContainer}>
				{displayPhotos.map(photo => (
					<div className={styles.thumb} key={`photo-${photo.id}`}>
						<Image src={photo.url + '.png'} width={100} height={100} alt={photo.title} priority={photo.id===1} />
						<div>Pic #{photo.id}</div>
					</div>
				))}
			</div>
			<div className={styles.container}>
				<div className={styles.btn} onClick={navPrevPage}>Prev</div>
				<div>Page {currentPage} of {pages}</div>
				<div className={styles.btn} onClick={navNextPage}>Next</div>
			</div>
		</div>
	)
}
export default Projects