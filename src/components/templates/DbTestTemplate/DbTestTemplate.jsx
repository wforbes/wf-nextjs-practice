import axios from 'axios'
import Parallax from 'src/components/molecules/Parallax/Parallax'
import RaisedPageCard from 'src/components/molecules/RaisedPageCard/RaisedPageCard'
import GridContainer from 'src/components/molecules/Grid/GridContainer'
import GridItem from 'src/components/molecules/Grid/GridItem'

import useStyles from './DbTestTemplate.styles'
import { Typography, List, ListItem, ListItemText, Button } from '@material-ui/core'
import { useState } from 'react'

const apiCall = (url) => {
	return axios.request({ url })
}

const DbTestTemplate = () => {
	const classes = useStyles()

	const [dbStatus, setDbStatus] = useState({ color: 'primary', text: ''})

	const testStatus = async () => {
		const response = await apiCall("/api/dbTest")

		if (response.data?.mongoStatus ) {
			setDbStatus((prev) => ({...prev, color: 'success', text:'Good'}))
		} else {
			setDbStatus((prev) => ({...prev, color: 'error', text:'Error'}))
		}
	}

	return (
		<>
			<Parallax small filter image="/profile-bg.jpg">
				<div className={classes.container}>
					<GridContainer>
						<GridItem>
							<div className={classes.pageHeadingContainer}>
								<h1 className={classes.pageHeading}>Database Test</h1>
							</div>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<RaisedPageCard topOverlap>
				<GridContainer justify='center'>
					<GridItem xs={3} sm={12} md={6}>
						<p>Testing MongoDB ...</p>
					</GridItem>
				</GridContainer>
				<GridContainer justify='center'>
					<GridItem xs={6} sm={6} md={3}>
						<Button variant="contained" color="primary" onClick={testStatus}>
							Status Test
						</Button>
					</GridItem>
					<GridItem xs={6} sm={6} md={3}>
						<Typography>{dbStatus.text}</Typography>
					</GridItem>
				</GridContainer>
			</RaisedPageCard>
		</>
	)
}

export default DbTestTemplate
