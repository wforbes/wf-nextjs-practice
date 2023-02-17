import classNames from 'classnames'
import Parallax from 'src/components/molecules/Parallax/Parallax'
import RaisedPageCard from 'src/components/molecules/RaisedPageCard/RaisedPageCard'
import GridContainer from 'src/components/molecules/Grid/GridContainer'
import GridItem from 'src/components/molecules/Grid/GridItem'

import useStyles from './AttributionsTemplate.styles'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const AttributionsTemplate = () => {
	const classes = useStyles()

	return (
		<>
			<Parallax small filter image="/profile-bg.jpg">
				<div className={classes.container}>
					<GridContainer>
						<GridItem>
							<div className={classes.pageHeadingContainer}>
								<h1 className={classes.pageHeading}>Attributions</h1>
							</div>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<RaisedPageCard topOverlap>
				<GridContainer justify='center'>
					<GridItem xs={12} sm={12} md={6}>
						<Typography variant="h2" component="h1">
							Frameworks
						</Typography>
						<List>
							<ListItem>
								<ListItemText>
									<a href="https://nextjs.org/" title="Next.js by Vercel" className={classes.boldLink}>
										Next.js v10.2.0 by Vercel
									</a>&nbsp;- 'The React Framework for the Web'
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									<a href="https://v4.mui.com/" title="Material-UI" className={classes.boldLink}>
										Material-UI v4.11.2
									</a>&nbsp;- 'React components for faster and easier web development'
								</ListItemText>
							</ListItem>
						</List>
						<Typography variant="h2" component="h1">
							UI Templates
						</Typography>
						<List>
							<ListItem>
								<ListItemText>
									Major portions of UI use modified code and images from:<br />
									<a href="https://www.creative-tim.com/product/nextjs-material-kit" title="creativetim nextjs-material-kit page" className={classes.boldLink}>
										Next.js Material Kit
									</a>
									&nbsp;by&nbsp;
									<a href="https://www.creative-tim.com/" target="creative tim website" className={classes.boldLink}>
										CreativeTim.com
									</a>;&nbsp;
									<a href="https://github.com/creativetimofficial/nextjs-material-kit" title="nextjs-material" className={classes.boldLink}>
										available on Github.com
									</a>
								</ListItemText>
							</ListItem>
						</List>
						<Typography variant="h2" component="h1">
							Icons
						</Typography>
						<List>
							<ListItem>
								<ListItemText>
									<a href="https://react-icons.github.io/react-icons" title="react-icons" className={classes.boldLink}>
										React-Icons
									</a> - provides icons from various sources
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									<a href="https://developers.google.com/fonts/docs/material_icons" title="google material icons" className={classes.boldLink}>
										Google's Material Icons
									</a> - included via Material-UI sub-dependencies and react-icon dependency
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									<a href="https://www.flaticon.com/free-icons/passion" title="passion icons" className={classes.boldLink}>
										Passion icons created by Freepik - Flaticon
									</a>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									<a href="https://www.flaticon.com/free-icons/knowledge" title="knowledge icons" className={classes.boldLink}>
										Knowledge icons created by Freepik - Flaticon
									</a>
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemText>
									<a href="https://www.flaticon.com/free-icons/focus" title="focus icons" className={classes.boldLink}>
										Focus icons created by Freepik - Flaticon
									</a>
								</ListItemText>
							</ListItem>
						</List>
					</GridItem>
				</GridContainer>
			</RaisedPageCard>
		</>
	)
}

export default AttributionsTemplate
