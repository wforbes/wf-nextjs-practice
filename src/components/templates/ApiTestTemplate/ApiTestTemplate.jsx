import PropTypes from 'prop-types'
import Parallax from 'src/components/molecules/Parallax/Parallax'
import RaisedPageCard from 'src/components/molecules/RaisedPageCard/RaisedPageCard'
import GridContainer from 'src/components/molecules/Grid/GridContainer'
import GridItem from 'src/components/molecules/Grid/GridItem'

import { useSelector } from 'react-redux'
import { getCurrentUser } from 'src/store/reducers/user/user.selector'

import FeatureTests from 'src/components/organisms/FeatureTests/FeatureTests'
import SignupForm from 'src/components/organisms/SignupForm/SignupForm'
import LoginForm from 'src/components/organisms/LoginForm/LoginForm'

import useStyles from './ApiTestTemplate.styles'
import {
	Box,
	AppBar,
	Tabs,
	Tab,
	Typography,
	Button,
	Paper,
	TextField,
	List, ListItem, ListItemText
} from '@material-ui/core'
import { useState } from 'react'

const TabPanel = (props) => {
	const { children, value, index, ...other} = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					{children}
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};



const ApiTestTemplate = () => {
	const classes = useStyles()
	const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const { user } = useSelector(getCurrentUser)

	

	return (
		<>
			<Parallax small filter image="/profile-bg.jpg">
				<div className={classes.container}>
					<GridContainer>
						<GridItem>
							<div className={classes.pageHeadingContainer}>
								<h1 className={classes.pageHeading}>API Tests</h1>
							</div>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<RaisedPageCard topOverlap>
				<div>User State: {user.email && user.email !== '' ? user.email : 'No User' }</div>
				<AppBar position='static'>
					<Tabs value={value} onChange={handleChange}>
						<Tab label='Feature Tests' />
						<Tab label='Signup Form' />
						<Tab label='Login Form' />
					</Tabs>
				</AppBar>
				<TabPanel value={value} index={0}>
					<FeatureTests />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<SignupForm />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<LoginForm />
				</TabPanel>
			</RaisedPageCard>
		</>
	)
}

export default ApiTestTemplate
