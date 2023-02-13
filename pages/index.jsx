import Link from 'next/link'
import HeadProvider from 'src/components/providers/HeadProvider/HeadProvider'
import MainTemplate from 'src/components/templates/MainTemplate/MainTemplate'
import HomeTemplate from '../src/components/templates/HomeTemplate/HomeTemplate'
//import styles from '../styles/Home.module.css'

const Home = () => (
	<HeadProvider>
		<MainTemplate>
			<HomeTemplate />
		</MainTemplate>
	</HeadProvider>
)

export default Home
