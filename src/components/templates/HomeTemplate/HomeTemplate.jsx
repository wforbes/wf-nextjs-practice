/*
* passionIcon, ideaIcon, and targetIcon found on https://flaticon.com
*/
import Parallax from "src/components/molecules/Parallax/Parallax"
import GridContainer from 'src/components/molecules/Grid/GridContainer'
import GridItem from 'src/components/molecules/Grid/GridItem'
import { 
	List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Paper
} from '@material-ui/core'

import useStyles from './HomeTemplate.styles'
import React from 'react'

import classNames from "classnames";

const HomeTemplate = () => {
	const classes = useStyles()

	const imageClasses = classNames(
		classes.imgRaised,
		classes.imgRoundedCircle,
		classes.imgFluid
	);

	const getYearsExperience = () => {
		const mwExp = 1.5 // years worked at modelwire.com / castingnetworks.com
		const avExp = 0.5 // years worked at avwebdesigns.com
		const intExp = 4 // years worked at Integrits Inc
		const jt4Exp = 0.75 // years worked at JT4, LLC
		const siglerStart = new Date('2023-01-16')
		const currentDate = new Date()
		//const currentDate = new Date('2025-03-24')
		
		// yearsDiff(d1, d2)
		let yearDiff = currentDate.getFullYear() - siglerStart.getFullYear()
		
		let monthsDiff = (yearDiff * 12) + ((currentDate.getMonth()+1) - (siglerStart.getMonth()+1))
		
		// getMonthsInDecimalYears(months)
		const siglerExp = Number((monthsDiff / 12).toFixed(2))
		
		return Number(
			Number(mwExp + avExp + intExp + jt4Exp + siglerExp).toFixed(2)
		) 
	}

	const wguLink = () => (<a href="https://wgu.edu" target="_blank">https://wgu.edu</a>)

	return (
		<>
			<Parallax small filter image="/profile-bg.jpg" />
			<div className={classNames(classes.main, classes.mainRaised, classes.beLoooong)}>
				<div>
					<div className={classes.container}>
						<GridContainer justify='center'>
							<GridItem xs={12} sm={12} md={6}>
								<div className={classes.profile}>
									<div>
										<img
											src="/img/selfie.png"
											alt="..."
											className={imageClasses}
										/>
									</div>
									<Typography variant="h5" component="h1">
										Hello! My name is <strong>Will Forbes</strong>.<br /> I'm a Fullstack Software Engineer<br /> based in Southern California.
									</Typography>
									<List className={classes.listContainer}>
										<ListItem>
											<ListItemAvatar >
												<Avatar alt="passionIcon" src="/passion_color.png" width={40} height={40} className={classes.introAvatar} />
											</ListItemAvatar>
											<ListItemText
												primary="Passionate about building my skills in software development and learning new things."
											/>
										</ListItem>
										<ListItem>
											<ListItemAvatar>
												<Avatar alt="ideaIcon" src="/idea_color.png" width={40} height={40} className={classes.introAvatar} />
											</ListItemAvatar>
											<ListItemText
												primary="Interested in solving difficult problems and bringing value to others."
											/>
										</ListItem>
										<ListItem>
											<ListItemAvatar>
												<Avatar alt="targetIcon" src="/target_color.png" width={40} height={40} className={classes.introAvatar} />
											</ListItemAvatar>
											<ListItemText
												primary="Focused on being thoughtful and considerate in my day-to-day life."
											/>
										</ListItem>
									</List>
								</div>
							</GridItem>
							<GridItem xs={12} sm={12} md={6} className={classes.pageContentContainer}>
								<Paper className={classes.introHighlights}>
									<ListItem>
										<ListItemAvatar>
											<Avatar alt="codingIcon" src="/coding_color.png" width={40} height={40} className={classes.highlightAvatar} />
										</ListItemAvatar>
										<ListItemText
											secondary={<Typography variant="body2" color="textSecondary" display="block">
												View my <a href="/job-history" target="_blank" className={classes.boldLink}>work history</a>
											</Typography>}
										>
											<span className={classes.boldText}>{ getYearsExperience() }</span> years of professional software experience.
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemAvatar>
											<Avatar alt="knowledgeIcon" src="/knowledge_color.png" width={40} height={40} className={classes.highlightAvatar} />
										</ListItemAvatar>
										<ListItemText
											secondary={<Typography variant="body2" color="textSecondary" display="block">
												From <a href="https://wgu.edu" target="_blank" className={classes.boldLink}>Western Governor's University</a>
											</Typography>}
										>
											Bachelor's of Science in Software Engineering
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemAvatar>
											<Avatar alt="certificateIcon" src="/certificate_color.png" width={40} height={40} className={classes.highlightAvatar} />
										</ListItemAvatar>
										<ListItemText
											secondary={<Typography variant="body2" color="textSecondary" display="block">
												View my <a href="/certificates" target="_blank" className={classes.boldLink}>certificates</a>
											</Typography>}
										>
											Numerous Technology Certifications
										</ListItemText>
									</ListItem>
									<ListItem>
										
									</ListItem>
								</Paper>
							</GridItem>
						</GridContainer>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeTemplate
