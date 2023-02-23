import { pageHeadingContainer,
	pageHeading,
	main,
	mainRaised,
	container,
	pageContentContainer,
	boldLink
} from 'styles/nextjs-material-kit'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	container,
	pageContentContainer,
	boldLink,
	pageHeadingContainer,
	pageHeading,
	main,
	mainRaised,	
	beLoooong: {
		height: '300em'
	}
}))

export default useStyles