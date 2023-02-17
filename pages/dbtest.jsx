import HeadProvider from 'src/components/providers/HeadProvider/HeadProvider'
import MainTemplate from 'src/components/templates/MainTemplate/MainTemplate'
import DbTestTemplate from '../src/components/templates/DbTestTemplate/DbTestTemplate'

const DbTest = () => (
	<HeadProvider>
		<MainTemplate>
			<DbTestTemplate />
		</MainTemplate>
	</HeadProvider>
)

export default DbTest
