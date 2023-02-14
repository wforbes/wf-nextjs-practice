import classNames from 'classnames'
import useStyles from './RaisedPageCard.styles'

const RaisedPageCard = ({ topOverlap, children }) => {
	const classes = useStyles()
	const outerWrapClasses = topOverlap ?
		[classes.main, classes.mainRaised]
		: [classes.secondaryRaised]
	
	return (
		<div className={classNames(outerWrapClasses, classes.smlPadding)}>
			<div>
				<div className={classes.container}>
					{children}
				</div>
			</div>
		</div>
	)
}

export default RaisedPageCard
	