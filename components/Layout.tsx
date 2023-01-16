import Head from "next/head"
import { useRouter } from 'next/router'
import Navbar from "./Navbar"
import Footer from "./Footer"
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
	
	const router = useRouter()

	const getPathName = () => {
		let displayPath = router.pathname.substring(1, router.pathname.length)
		if (displayPath.length === 0) return "Home"
		return displayPath[0].toLocaleUpperCase() + displayPath.substring(1, displayPath.length)
	}

	return (
		<>
			<Head>
				<title>{`wf-nextjs-practice | ${getPathName()}`}</title>
			</Head>
			<div className="content">
				<Navbar />
				{ children }
				<Footer />
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}
 
export default Layout