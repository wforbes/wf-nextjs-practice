import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Link href="/">
					<a>
						<Image src="/logo.png" width={48} height={48} alt="WF logo" />
					</a>
				</Link>
			</div>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/pictures">Pictures</Link>
		</nav>
	)
}
 
export default Navbar