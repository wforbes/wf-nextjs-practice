import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/Link'

export default function Home() {
  return (
    <div>
		<Navbar />
		<h1>Home</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa aspernatur rerum ducimus assumenda deleniti rem expedita! Incidunt nesciunt sequi repellat asperiores nostrum quae minus adipisci, voluptas, alias voluptates eum?</p>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa aspernatur rerum ducimus assumenda deleniti rem expedita! Incidunt nesciunt sequi repellat asperiores nostrum quae minus adipisci, voluptas, alias voluptates eum?</p>
		<Link href="/contacts">See Contacts listing</Link>
		<Footer />
    </div>
  )
}
