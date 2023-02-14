import GridContainer from 'src/components/molecules/Grid/GridContainer'
import GridItem from 'src/components/molecules/Grid/GridItem'

import { Paper, Typography } from '@material-ui/core'

import classNames from 'classnames'
import useStyles from './HomeProjects.styles'

const HomeProjects = () => {
	const classes = useStyles()

	return (
		<GridContainer justify='center' className={classes.outerSpacing} spacing={3}>
			<GridItem xs={12} sm={12} md={12}>
				<Typography align='center'>
					Projects
				</Typography>
			</GridItem>
			<GridItem xs={12} sm={12} md={3}>
				<Paper>placeholder</Paper>
			</GridItem>
			<GridItem xs={12} sm={12} md={3}>
				<Paper>placeholder</Paper>
			</GridItem>
			<GridItem xs={12} sm={12} md={3}>
				<Paper>placeholder</Paper>
			</GridItem>
		</GridContainer>
	)
}
 
export default HomeProjects;