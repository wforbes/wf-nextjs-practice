import Link from 'next/Link'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div >
		<h1 className={styles.title}>Home</h1>
		<p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa aspernatur rerum ducimus assumenda deleniti rem expedita! Incidunt nesciunt sequi repellat asperiores nostrum quae minus adipisci, voluptas, alias voluptates eum?</p>
		<p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa aspernatur rerum ducimus assumenda deleniti rem expedita! Incidunt nesciunt sequi repellat asperiores nostrum quae minus adipisci, voluptas, alias voluptates eum?</p>
		<Link href="/projects" className={styles.btn}>
			See Projects listing
		</Link>
    </div>
  )
}
