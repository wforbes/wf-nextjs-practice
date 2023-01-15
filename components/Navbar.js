import Link from 'next/Link'

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<h1>Will Forbes</h1>
			</div>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/projects">Projects</Link>
		</nav>
	);
}
 
export default Navbar;