/*
* passionIcon, ideaIcon, and targetIcon found on https://flaticon.com
*/

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import useStyles from './HomeTemplate.styles'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const HomeTemplate = () => {
	const classes = useStyles()
	return (
		<>
			<Container spacing={3} className={classes.introContainer}>
				<Paper className={classes.paper}>
					<Grid container spacing={2}>
						<Grid item xs={4} className={classes.selfIntroContainer}>
							<Typography variant="h5" component="h1">
								Hello! My name is <strong>Will Forbes</strong>.<br /> I'm a Fullstack Software Engineer based in southern California.
							</Typography>
						</Grid>
						<Grid item xs={8}>
							<List className={classes.listContainer}>
								<ListItem>
									<ListItemAvatar>
										<Avatar alt="passionIcon" src="/passion_color.png" />
									</ListItemAvatar>
									<ListItemText
										primary="Passionate about building my skills in software development and learning new things."
									/>
								</ListItem>
								<ListItem>
									<ListItemAvatar>
										<Avatar alt="ideaIcon" src="/idea_color.png" />
									</ListItemAvatar>
									<ListItemText
										primary="Interested in solving difficult problems and bringing value to others."
									/>
								</ListItem>
								<ListItem>
									<ListItemAvatar>
										<Avatar alt="targetIcon" src="/target_color.png" />
									</ListItemAvatar>
									<ListItemText
										primary="Focused on being thoughtful and considerate in my day-to-day life."
									/>
								</ListItem>
							</List>		
						</Grid>
					</Grid>
				</Paper>
			</Container>
		</>
	)
}

export default HomeTemplate
