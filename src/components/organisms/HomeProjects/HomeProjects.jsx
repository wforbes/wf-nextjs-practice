import { 
	Card, CardMedia, CardContent, CardActionArea,
	IconButton, CardActions
} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import ShareIcon from '@material-ui/icons/Share'
import { makeStyles } from '@material-ui/core'
import GridContainer from 'src/components/molecules/Grid/GridContainer'
import GridItem from 'src/components/molecules/Grid/GridItem'
import useStyles from './HomeProjects.styles'

const HomeProjects = () => {
	const classes = useStyles()

	const showShareDialog = (project) => {
		return () => {
			// TODO: Add share dialog
			if (navigator.share) {
				navigator.share({
					title: project.title,
					text: project.description,
					url: project.url
				})
			}
		}
	}

	return (
		<>
			<h1>Projects</h1>
			<GridContainer>
				<GridItem xs={12} md={4} className={classes.gridItem}>
					<Card>
						<CardActionArea>
							<CardMedia
								className={classes.cardMedia}
								image='/img/levelz1.png'
								title='levelz.app'
							/>
						</CardActionArea>
						<CardContent className={classes.cardContent}>
							<h2>Levelz.app</h2>
							<p>Web app that gameifies your tasks</p>
							<dl>
								<dd className='check'>Complete to-do lists, simple and complex</dd>
								<dd className='check'>Pick up good habits, quit bad habits</dd>
								<dd className='check'>Learn new skills, share skill templates</dd>
								<dd className='wrench'>Built with <b>Vue</b>, <b>Express</b>, and <b>MongoDB</b></dd>
							</dl>
						</CardContent>
						<CardActions>
							<IconButton aria-label="github" href="">
								<GitHubIcon />
							</IconButton>
							<IconButton aria-label="share" onClick={showShareDialog({
								title: 'levelz.app',
								description: 'Web app that gameifies your tasks',
								url: 'https://levelz.app'
							})}>
								<ShareIcon />
							</IconButton>
						</CardActions>
					</Card>
				</GridItem>
				<GridItem xs={12} md={4}>
					<Card>
						<CardActionArea>
							<CardMedia
								className={classes.cardMedia}
								image='/img/selfie.png'
								title='placeholder img'
							/>
						</CardActionArea>
						<CardContent className={classes.cardContent}>
							<h2>LearnCode4Free.com</h2>
							<p>
								Information for new developers
							</p>
							<dl>
								<dd className='teacher'>Listing of free coding resources</dd>
								<dd className='teacher'>Free code tutorials and guides</dd>
								<dd className='teacher'>Developer career articles</dd>
								<dd className='wrench'>Built with <b>Wordpress</b>, <b>PHP</b>, and <b>MySQL</b></dd>
							</dl>
						</CardContent>
						<CardActions>
							<IconButton aria-label="share" onClick={showShareDialog({
								title: 'learncode4free.com',
								description: 'Directory of free coding resources',
								url: 'https://learncode4free.com'
							})}>
								<ShareIcon />
							</IconButton>
						</CardActions>
					</Card>
				</GridItem>
				<GridItem xs={12} md={4}>
					<Card>
						<CardActionArea>
							<CardMedia
								className={classes.cardMedia}
								image="/img/selfie.png"
								title=""
							/>
						</CardActionArea>
						<CardContent className={classes.cardContent}>
							<h2>ProjectTracker.dev</h2>
							<p>
								Project management and tracking app
							</p>
							<dl>
								<dd className='clipboard'>Ticketing system</dd>
								<dd className='clipboard'>Kanban board</dd>
								<dd className='clipboard'>Gantt chart?</dd>
								<dd className='wrench'>Built with <b>Next.js</b>, <b>Django</b>, and <b>PostgreSQL</b></dd>
							</dl>
						</CardContent>
						<CardActions>
							<IconButton aria-label="share" onClick={showShareDialog({
								title: 'projecttracker.dev',
								description: '',
								url: 'https://projecttracker.dev'
							})}>
								<ShareIcon />
							</IconButton>
						</CardActions>
					</Card>
				</GridItem>
				<GridItem xs={12} md={4}>
					<Card>
						<CardActionArea>
							<CardMedia
								className={classes.cardMedia}
								image="/img/selfie.png"
								title=""
							/>
							<CardContent className={classes.cardContent}>
								<h2>InstaChat.dev</h2>
								<p>
									Real-time chat application
								</p>
								<dl>
									<dd className='chat-bubble'>Message friends instantly</dd>
									<dd className='chat-bubble'>Share a link to begin a chat with anyone</dd>
									<dd className='chat-bubble'>Send pictures, videos, and audio</dd>
									<dd className='wrench'>Built with <b>Frontend</b>, <b>Backend</b>, and <b>Database</b></dd>
								</dl>
							</CardContent>
						</CardActionArea>
					</Card>
				</GridItem>
				<GridItem xs={12} md={4}>
					<Card>
						<CardActionArea>
							<CardMedia
								className={classes.cardMedia}
								image="/img/selfie.png"
								title=""
							/>
							<CardContent className={classes.cardContent}>
								<h2>CashKeep.dev</h2>
								<p>
									Personal Finance Tracking app
								</p>
								<dl>
									<dd className='money'>Make budgets and track spending</dd>
									<dd className='money'>Organize and label your transactions</dd>
									<dd className='money'>Plan savings, identify ways to cut back</dd>
									<dd className='wrench'>Built with <b>Frontend</b>, <b>Backend</b>, and <b>Database</b></dd>
								</dl>
							</CardContent>
						</CardActionArea>
					</Card>
				</GridItem>
				<GridItem xs={12} md={4}>
					<Card>
						<CardActionArea>
							<CardMedia
								className={classes.cardMedia}
								image="/img/selfie.png"
								title=""
							/>
							<CardContent className={classes.cardContent}>
								<h2>StoreMart.dev</h2>
								<p>
									(todo) Sample custom eCommerce application
								</p>
								<dl>
									<dd className='cart'>Interactive eCommerce app</dd>
									<dd className='cart'>Product listings and inventory</dd>
									<dd className='cart'>etc...</dd>
									<dd className='wrench'>Built with <b>Frontend</b>, <b>Backend</b>, and <b>Database</b></dd>
								</dl>
							</CardContent>
						</CardActionArea>
					</Card>
				</GridItem>
			</GridContainer>
			{/* TODO: MobileStepper with dots */}
		</>
	)
}

export default HomeProjects