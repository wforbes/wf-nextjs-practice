import { 
	Card, CardMedia, CardContent, CardActionArea,
	IconButton, CardActions
} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import ShareIcon from '@material-ui/icons/Share'
import { makeStyles } from '@material-ui/core'
import GridContainer from 'src/components/molecules/Grid/GridContainer'
import GridItem from 'src/components/molecules/Grid/GridItem'


const useStyles = makeStyles({
	cardMedia: {
		height: 180,
		boxShadow: 'inset 0 0 10px 10px rgba(200, 200, 200, 0.5)'
	}
})

const cardContentStyles = makeStyles(() => {
	return {
		root: {
			'& h2': {
				margin: 0,
				textAlign: 'center'
			},
			'& p': {
				textAlign: 'center'
			},
			'& dl': {
				'& dd.check': {
					display: 'list-item',
					marginLeft: '2ch',
					'&::marker': {
						content: '"✅ "',
						fontSize: '1rem'
					}
				},
				'& dd.teacher': {
					display: 'list-item',
					marginLeft: '2ch',
					'&::marker': {
						content: '"👩‍🏫 "',
						fontSize: '1rem'
					}
				},
				'& dd.wrench': {
					display: 'list-item',
					marginLeft: '2ch',
					'&::marker': {
						content: '"🔧 "',
						fontSize: '1rem'
					}
				}
			}
		}
	}
})

const HomeProjects = () => {
	const classes = useStyles()
	const cardContentClasses = cardContentStyles()

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
				<GridItem xs={12} md={4}>
					<Card>
						<CardActionArea>
							<CardMedia
								className={classes.cardMedia}
								image='/img/levelz1.png'
								title='levelz.app'
							/>
						</CardActionArea>
						<CardContent classes={cardContentClasses}>
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
							<IconButton aria-label="github" href="https://github.com/wforbes/levelz.app">
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
						<CardContent classes={cardContentClasses}>
							<h2>LearnCode4Free.com</h2>
							<p>
								Directory of free coding resources
							</p>
							<dl>
								<dd className='teacher'>Listing of free coding resources</dd>
								<dd className='teacher'></dd>
								<dd className='teacher'></dd>
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
						<CardContent classes={cardContentClasses}>
							<h2>ProjectTracker.dev</h2>
							<p>
								(todo) Project tracking app
							</p>
							<dl>
								<dd className='check'>Ticketing system</dd>
								<dd className='check'>Kanban board</dd>
								<dd className='check'>Gantt chart?</dd>
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
							<CardContent classes={cardContentClasses}>
								<h2>InstaChat.dev</h2>
								<p>
									(todo) Real-time chat application
								</p>
								<dl>
									<dd className=''>Message friends instantly</dd>
									<dd className=''>Share a link to begin a chat with anyone</dd>
									<dd className=''>Send pictures, videos, and audio</dd>
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
							<CardContent classes={cardContentClasses}>
								<h2>CashKeep.dev</h2>
								<p>
									(todo) Personal Finance Tracking app
								</p>
								<dl>
									<dd className=''>Make budgets and track spending</dd>
									<dd className=''>Organize and label your transactions</dd>
									<dd className=''>Plan savings, identify ways to cut back</dd>
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
							<CardContent classes={cardContentClasses}>
								<h2>StoreMart.dev</h2>
								<p>
									(todo) Sample custom eCommerce application
								</p>
								<dl>
									<dd className=''>Interactive eCommerce app</dd>
									<dd className=''>Product listings and inventory</dd>
									<dd className=''>etc...</dd>
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