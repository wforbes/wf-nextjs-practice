import Link from 'next/Link'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const NotFound = () => {
	const router = useRouter()
	let [seconds, setSeconds] = useState(3)

	useEffect(() => {
		setTimeout(() => {
			if (seconds <= 0) {
				router.push('/')
				return
			}
			setSeconds(seconds - 1)
		}, 1000)
	}, [seconds])

	return (
		<div className="not-found">
			<h1>Oops!</h1>
			<h2>That page cannot be found.</h2>
			<p>Redirecting you to the Home Page in {seconds} seconds...</p>
			<p>Or you can click here: <Link href="/">Home Page</Link>.</p>
		</div>
	);
}
 
export default NotFound;