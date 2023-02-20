import HeadProvider from 'src/components/providers/HeadProvider/HeadProvider'
import MainTemplate from 'src/components/templates/MainTemplate/MainTemplate'
import ApiTestTemplate from 'src/components/templates/ApiTestTemplate/ApiTestTemplate'

const DbTest = () => (
	<HeadProvider>
		<MainTemplate>
			<ApiTestTemplate />
		</MainTemplate>
	</HeadProvider>
)

export default DbTest
