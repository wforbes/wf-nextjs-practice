import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Pictures.module.css'

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/photos?_')
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
	let [state, setState] = useState({
		currentPage: 1,
		displayPhotos: [...photos.slice(0, maxPerPage)]
	})
	
	const navPrevPage = () => {
		if (state.currentPage === 1) return
		setState(prevState => ({
			currentPage: prevState.currentPage - 1,
			displayPhotos: [
				// use currentPage-2 multipler to account for zero index offset
				...photos.slice(
					(prevState.currentPage-2)*maxPerPage,
					(prevState.currentPage-2)*maxPerPage+maxPerPage
				)
			]
		}))
	}

	const navNextPage = () => {
		if (state.currentPage === pages) return
		setState(prevState => ({
			currentPage: prevState.currentPage + 1,
			displayPhotos: [
				...photos.slice(
					(prevState.currentPage+1)*maxPerPage,
					(prevState.currentPage+1)*maxPerPage+maxPerPage
				)
			]
		}))
	}

	return (
		<div>
			<h1>Pictures</h1>
			<div className={styles.thumbContainer}>
				{state.displayPhotos.map(photo => (
					<div className={styles.thumb} key={`photo-${photo.id}`}>
						<Image src={photo.url + '.png'} width={100} height={100} alt={photo.title} priority={photo.id===1} />
						<div>Pic #{photo.id}</div>
					</div>
				))}
			</div>
			<div className={styles.container}>
				<div className={styles.btn} onClick={navPrevPage}>Prev</div>
				<div>Page {state.currentPage} of {pages}</div>
				<div className={styles.btn} onClick={navNextPage}>Next</div>
			</div>
		</div>
	)
}
export default Projects