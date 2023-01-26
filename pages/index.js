import Link from 'next/link'
import styles from '../styles/Home.module.css'
const Home = () => {
	return (
		<div>
			<h1 className={styles.title}>Home</h1>
			<p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa aspernatur rerum ducimus assumenda deleniti rem expedita! Incidunt nesciunt sequi repellat asperiores nostrum quae minus adipisci, voluptas, alias voluptates eum?</p>
			<p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa aspernatur rerum ducimus assumenda deleniti rem expedita! Incidunt nesciunt sequi repellat asperiores nostrum quae minus adipisci, voluptas, alias voluptates eum?</p>
			<Link href="/pictures" className={styles.btn}>
				See Pictures listing
			</Link>
		</div>
	)
}

export default Home
