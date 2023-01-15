import Link from 'next/Link'
import Image from 'next/Image'

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Link href="/">
					<Image src="/logo.png" width={48} height={48} />
				</Link>
			</div>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/projects">Projects</Link>
		</nav>
	)
}
 
export default Navbar