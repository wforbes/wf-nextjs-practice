import { 
	Card, CardMedia, CardContent, CardActionArea,
	IconButton, CardActions
} from '@material-ui/core'
import LinkIcon from '@material-ui/icons/Link'
import GitHubIcon from '@material-ui/icons/GitHub'
import ShareIcon from '@material-ui/icons/Share'
import GridContainer from 'src/components/molecules/Grid/GridContainer'
import GridItem from 'src/components/molecules/Grid/GridItem'
import ProjectFeatureList from 'src/components/organisms/HomeProjects/ProjectFeatureList'
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

	const projects = [
		{
			title: 'Levelz.app',
			description: 'Web app that gameifies your tasks',
			image: '/img/levelz1.png',
			features: [
				'Complete to-do lists, simple and complex',
				{
					icon: '😇',
					text: 'Pick up good habits, quit bad habits',
				},
				{
					icon: '📋',
					text: 'Learn new skills, share skill templates'
				},
				
			],
			listIcon: '✅',
			tech: ['Vue', 'Express.js', 'MongoDB'],
			github: 'https://github.com/wforbes/levelz.app',
			url: 'https://levelz.app'
		},
		{
			title: 'LearnCodeForFree.com',
			description: 'Information for new developers',
			url: 'https://learncodeforfree.com',
			image: '/img/selfie.png',
			features: [
				'Listing of free coding resources',
				'Free code tutorials',
				'Beginning dev career advice'
			],
			tech: ['Wordpress', 'PHP', 'MySQL'],
			listIcon: '👩‍🏫'
		},
		{
			//title: 'Days.dev',
			title: 'Count.day',
			description: 'Personal time perspective app',
			image: '/img/selfie.png',
			features: [
				'See how many days you have lived',
				'Remember important life events',
				'Journal daily and plan for the future'
			],
			tech: ['Next.js', 'Prisma', 'PostgreSQL'],
			listIcon: '📅',
			url: 'https://count.day',
			//github: 'https://github.com/wforbes/count.day',
		},
		{
			title: 'ProjectTracker.dev',
			description: 'Project management app',
			image: '/img/selfie.png',
			features: [
				'Ticketing system',
				'Kanban board',
				'Gantt chart'
			],
			tech: ['Next.js', 'Django', 'PostgreSQL'],
			listIcon: '📋'
			//github: 'https://github.com/wforbes/projecttracker.dev',
			//url: 'https://projecttracker.dev',
		},
		{
			title: 'InstaChat.dev',
			description: 'Real-time chat app',
			image: '/img/selfie.png',
			features: [
				'Invite and message individuals and groups',
				'Enjoy reactions and emojis',
				'Share emojis, photos, videos and audio'
			],
			tech: ['Vue', 'Fastify', 'MongoDB'],
			listIcon: '💬'
			//github: 'https://github.com/wforbes/instachat.dev',
			//url: 'https://instachat.dev',
		},
		{
			title: 'CashKeep.dev',
			description: 'Personal finance app',
			image: '/img/selfie.png',
			features: [
				'Make budgets and track expenses',
				'Organize and label transactions',
				'Plan savings, identify ways to save'
			],
			tech: ['React', 'Laravel', 'PostgreSQL'],
			listIcon: '💵'
			//github: 'https://github.com/wforbes/cashkeep.dev',
			//url: 'https://cashkeep.dev',
		},
	]


	return (
		<>
			<h1>Projects</h1>
			{/* TODO: Search / filter controls */}
			<GridContainer>
				{projects.map((project, idx) => (
					<GridItem xs={12} md={4} key={idx} className={classes.gridItem}>
						<Card>
							<CardActionArea>
								<CardMedia
									className={classes.cardMedia}
									image={project.image}
									title={project.title}
								/>
							</CardActionArea>
							<CardContent className={classes.cardContent}>
								<h2>{project.title}</h2>
								<p>{project.description}</p>
								<ProjectFeatureList
									listIcon={project.listIcon}
									features={project.features}
									tech={project.tech}
								/>
							</CardContent>
							<CardActions>
								{project?.github && (
									<IconButton aria-label="github" href={project.github} target="_blank">
										<GitHubIcon />
									</IconButton>
								)}
								{project?.url && (
									<IconButton aria-label="github" href={project.url} target="_blank">
										<LinkIcon />
									</IconButton>
								)}
								<IconButton aria-label="share" onClick={showShareDialog(project)}>
									<ShareIcon />
								</IconButton>
							</CardActions>
						</Card>
					</GridItem>
				))}
			</GridContainer>
			{/* TODO: MobileStepper with dots */}
		</>
	)
}

export default HomeProjects