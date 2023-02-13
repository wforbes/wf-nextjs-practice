/*
* passionIcon, ideaIcon, and targetIcon found on https://flaticon.com
*/
import Parallax from "src/components/molecules/Parallax/Parallax"
import GridContainer from 'src/components/molecules/Grid/GridContainer'
import GridItem from 'src/components/molecules/Grid/GridItem'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import useStyles from './HomeTemplate.styles'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import classNames from "classnames";

const HomeTemplate = () => {
	const classes = useStyles()

	const imageClasses = classNames(
		classes.imgRaised,
		classes.imgRoundedCircle,
		classes.imgFluid
	);

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
						</GridContainer>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeTemplate
