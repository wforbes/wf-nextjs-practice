
import { ChevronRight } from "@mui/icons-material";
import { Paper, List, ListItem, ListItemText, Typography, Divider, ListItemAvatar, Avatar, ListItemSecondaryAction } from "@mui/material";
import styles from "./MyProfile.module.css";

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



export default function MyHighlights() {
    return (
        <Paper className={styles.introHighlights}>
            <List>
                <ListItem>
                    <ListItemText>
                        <Typography variant="h5" align="center">
                            Highlights
                        </Typography>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="codingIcon" src="/icons/coding_color.png" className={styles.highlightAvatar} />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={<Typography variant="body2" color="textSecondary" display="block">
                            View my <a href="/job-history" className={styles.boldLink}>work history</a>
                        </Typography>}
                    >
                        <span className={styles.boldText}>{ getYearsExperience() }</span> years of professional software experience.
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <ChevronRight />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="knowledgeIcon" src="/icons/knowledge_color.png"  className={styles.highlightAvatar} />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={<Typography variant="body2" color="textSecondary" display="block">
                            From <a href="https://wgu.edu" target="_blank" className={styles.boldLink}>Western Governor&apos;s University</a>
                        </Typography>}
                    >
                        Bachelor&apos;s of Science in Software Engineering
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <ChevronRight />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="certificateIcon" src="/icons/certificate_color.png" className={styles.highlightAvatar} />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={<Typography variant="body2" color="textSecondary" display="block">
                            View my <a href="/certificates" className={styles.boldLink}>certificates</a>
                        </Typography>}
                    >
                        Numerous Technology Certifications
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <ChevronRight />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="trophyIcon" src="/icons/trophy_color.png" className={styles.highlightAvatar} />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={<Typography variant="body2" color="textSecondary" display="block">
                            View my <a href="/work-awards" className={styles.boldLink}>workplace awards</a>
                        </Typography>}
                    >
                        Multiple Company / Workplace Awards
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <ChevronRight />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="codeIcon" src="/icons/code_color.png" className={styles.highlightAvatar} />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={<Typography variant="body2" color="textSecondary" display="block">
                            View my <a href="https://github.com/wforbes" target="_blank" className={styles.boldLink}>Github profile</a>
                        </Typography>}
                    >
                        Active Coder With 1000+ Commits Annually
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <ChevronRight />
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="skateboardIcon" src="/icons/skateboard_color.png" className={styles.highlightAvatar} />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={<Typography variant="body2" color="textSecondary" display="block">
                            View my skateboarding <a href="/certificates" target="_blank" className={styles.boldLink}>videos and photos</a>
                        </Typography>}
                    >
                        Avid Skateboarder of 25+ Years
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <ChevronRight />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </Paper>
    )
}