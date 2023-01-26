//import { useRouter } from 'next/router'
import Link from 'next/link'

const Details = () => {
	//const router = useRouter()

	return ( 
		<div>
			<div>
				<Link href={'/pictures'}>
					&lt;- Back to pictures
				</Link>
			</div>
			<h1>Picture Details</h1>
		</div>
	 );
}
 
export default Details;