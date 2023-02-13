import classNames from 'classnames'
import Parallax from 'src/components/molecules/Parallax/Parallax'
import GridContainer from 'src/components/molecules/Grid/GridContainer'
import GridItem from 'src/components/molecules/Grid/GridItem'

import useStyles from './AttributionsTemplate.styles'

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
			<div className={classNames(classes.main, classes.mainRaised, classes.beLoooong)}>
				<div>
					<div className={classes.container}>
					</div>
				</div>
			</div>
		</>
	)
}

export default AttributionsTemplate
