import Link from 'next/Link'
import Image from 'next/Image'

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Image src="/logo.png" width={96} height={96} />
			</div>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/projects">Projects</Link>
		</nav>
	);
}
 
export default Navbar;