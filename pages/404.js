import Link from 'next/Link'

const NotFound = () => {
	return (
		<div className="not-found">
			<h1>Oops!</h1>
			<h2>That page cannot be found.</h2>
			<p>Go back to the <Link href="/">Home Page</Link>.</p>
		</div>
	);
}
 
export default NotFound;