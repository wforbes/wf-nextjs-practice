import React from 'react'
import PropTypes from 'prop-types'
import Header from 'src/components/organisms/Header/Header'
import HeaderLinks from 'src/components/organisms/Header/HeaderLinks'
import Parallax from 'src/components/molecules/Parallax/Parallax'
import RaisedPageCard from 'src/components/molecules/RaisedPageCard/RaisedPageCard'
import GridContainer from 'src/components/molecules/Grid/GridContainer'
import GridItem from 'src/components/molecules/Grid/GridItem'
import Footer from 'src/components/organisms/Footer/Footer'
import withWidth from '@material-ui/core/withWidth'

import useStyles from './MainTemplate.styles'

const MainTemplate = ({ pageHeading, headerSize, children }) => {
	const classes = useStyles()

	const parallaxSectionSize = headerSize
	const getScrollChangePx = () => {
		let scrollChangePx
		switch(headerSize) {
			case 'large': {
				scrollChangePx = 500
				break
			}
			case 'medium': {
				scrollChangePx = 200
				break
			}
			case 'small': {
				scrollChangePx = 150
				break
			}
			case 'xsmall': {
				scrollChangePx = 99	
				break
			}
			default: {
				scrollChangePx = 200
				break
			}
		}
		return scrollChangePx
	}
	
	


	return (
		<>
			<Header
				color="transparent"
				rightLinks={<HeaderLinks />}
				fixed
				changeColorOnScroll={{
					height: getScrollChangePx(),
					color: "white"
				}}
			/>
			<Parallax size={parallaxSectionSize} filter image="/profile-bg.jpg">
				{pageHeading &&
					<div className={classes.container}>
						<GridContainer>
							<GridItem>
								<div className={classes.pageHeadingContainer}>
									<h1 className={classes.pageHeading}>{pageHeading}</h1>
								</div>
							</GridItem>
						</GridContainer>
					</div>
				}
			</Parallax>
			<RaisedPageCard topOverlap>
				{children}
			</RaisedPageCard>
			<Footer />
		</>
	)
}

MainTemplate.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
}

export default withWidth()(MainTemplate)
