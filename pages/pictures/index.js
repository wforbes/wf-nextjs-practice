import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../../styles/Pictures.module.css'
import PhotoPlaceholders from './PhotoPlaceholders'

const initialMaxPerPage = 16

export const getStaticProps = async () => {
	const photoRes = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=${initialMaxPerPage}`)
	const photoData = await photoRes.json()

	const totalRes = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=1`)
	let totalCount = totalRes.headers.get('x-total-count');
	if(typeof totalCount !== 'undefined' && totalCount.length > 0) {
		totalCount = Number.parseInt(totalCount)
	}


	return {
		props: {
			photos: photoData,
			total: totalCount
		}
	}
}

const Projects = ({ photos, total }) => {
	let [state, setState] = useState({
		loading: false,
		maxPerPage: initialMaxPerPage,
		pages: Math.ceil(total / initialMaxPerPage),
		currentPage: 1,
		displayPhotos: [...photos.slice(0, initialMaxPerPage)]
	})

	const fetchPhotos = async (page) => {
		if (page > state.pages) return
		if (page < 0) page = 0
		
		setState(prevState => ({
			...prevState,
			loading: true
		}))
		
		const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${page*state.maxPerPage}&_limit=${state.maxPerPage}`)
		const photos = await res.json()
		
		setState(prevState => ({
			...prevState,
			loading: false
		}))
		return photos
	}
	
	const navNextPage = async () => {
		if (state.currentPage === state.pages) return
		console.log(state.currentPage)
		const photos = await fetchPhotos(state.currentPage + 1)
		setState(prevState => ({
			...prevState,
			currentPage: prevState.currentPage + 1,
			displayPhotos: photos
		}))
	}

	const navPrevPage = async () => {
		if (state.currentPage === 1) return
		const photos = await fetchPhotos(state.currentPage - 2)
		setState(prevState => ({
			...prevState,
			currentPage: prevState.currentPage - 1,
			displayPhotos: photos
		}))
	}

	return (
		<div>
			<h1>Pictures</h1>
			<div className={styles.thumbContainer}>
				{state.loading ?
					<PhotoPlaceholders maxPageTotal={state.maxPerPage} />
					:
					state.displayPhotos ? state.displayPhotos.map(photo => (
						<div className={styles.thumb} key={`photo-${photo.id}`}>
							<Link href={`/pictures/${photo.id}`} key={photo.id}>
								<Image
									src={photo.url + '.png'}
									width={100}
									height={100}
									alt={photo.title}
									priority={photo.id===1}
									className={styles.photo}
								/>
							</Link>
							<div>Pic #{photo.id}</div>
						</div>
					)) : 'There was an error! Stop drop and roll immediately.'
				}
			</div>
			<div className={styles.pageControlContainer}>
				<button className={[styles.btn, ].join(' ')} onClick={navPrevPage}>Prev</button>
				<div>Page {state.currentPage} of {state.pages}</div>
				<button className={styles.btn} onClick={navNextPage}>Next</button>
			</div>
		</div>
	)
}
export default Projects