import HeadProvider from 'src/components/providers/HeadProvider/HeadProvider'
import FeedbackProvider from 'src/components/providers/FeedbackProvider/FeedbackProvider'
import MainTemplate from 'src/components/templates/MainTemplate/MainTemplate'
import SignupTemplate from 'src/components/templates/SignupTemplate/SignupTemplate'


const Signup = () => (
	<HeadProvider>
		<FeedbackProvider>
			<MainTemplate headerSize='xsmall'>
				<SignupTemplate />
			</MainTemplate>
		</FeedbackProvider>
	</HeadProvider>
)

export default Signup