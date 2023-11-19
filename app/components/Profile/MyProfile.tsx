import { Avatar, Divider, Grid, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Paper, Typography } from "@mui/material";
import Image from 'next/image';
import styles from "./MyProfile.module.css";
import classNames from "classnames";
import MyHighlights from "./MyHighlights";


export default function MyProfile() {

    const imageClasses = classNames(
        styles.imgRaised,
        styles.imgRoundedCircle,
        styles.imgFluid
    );

    return (
		<Grid container sx={{
            justify:'center',
            marginRight: "-15px",
            marginLeft: "-15px",
            width: "auto",
        }}>
			<Grid item xs={12} sm={12} md={6} sx={{
                position: "relative",
                width: "100%",
                minHeight: "1px",
                paddingRight: "15px",
                paddingLeft: "15px",
                flexBasis: "auto"
            }}>
                <div className={styles.profile}>
                    <div className={styles.profileImgContainer}>
						<Image
							src="/img/selfie.png"
                            width='100'
                            height='100'
							alt="..."
							className={imageClasses}
						/>
                    </div>
                    <Typography variant="h5" component="h1">
                        Hello! My name is <strong>Will Forbes</strong>.<br /> I&apos;m a Full Stack Developer<br /> based in Southern California.
                    </Typography>
                    <List className={styles.listContainer}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar alt="passionIcon" src="/icons/passion_color.png" className={styles.introAvatar} />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Passionate about building my skills in software engineering and learning new things."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar alt="ideaIcon" src="/icons/idea_color.png" className={styles.introAvatar} />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Interested in solving difficult problems and bringing value to others."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar alt="targetIcon" src="/icons/target_color.png" className={styles.introAvatar} />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Focused on being thoughtful and considerate in my day-to-day life."
                            />
                        </ListItem>
                    </List>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={styles.highlightContainer}>
				<MyHighlights />
			</Grid>
        </Grid>
    )
}