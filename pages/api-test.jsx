import HeadProvider from 'src/components/providers/HeadProvider/HeadProvider'
import MainTemplate from 'src/components/templates/MainTemplate/MainTemplate'
import ApiTestTemplate from 'src/components/templates/ApiTestTemplate/ApiTestTemplate'
import FeedbackProvider from 'src/components/providers/FeedbackProvider/FeedbackProvider'

const ApiTest = () => (
	<HeadProvider>
		<FeedbackProvider>
			<MainTemplate>
				<ApiTestTemplate />
			</MainTemplate>
		</FeedbackProvider>
	</HeadProvider>
)

export default ApiTest
