import HeadProvider from 'src/components/providers/HeadProvider/HeadProvider'
import MainTemplate from 'src/components/templates/MainTemplate/MainTemplate'
import AttributionsTemplate from '../src/components/templates/AttributionsTemplate/AttributionsTemplate'

const Attributions = () => (
	<HeadProvider>
		<MainTemplate>
			<AttributionsTemplate />
		</MainTemplate>
	</HeadProvider>
)

export default Attributions
