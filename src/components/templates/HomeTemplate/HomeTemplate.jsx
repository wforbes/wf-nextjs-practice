import React from 'react'
import Parallax from "src/components/molecules/Parallax/Parallax"
import RaisedPageCard from "src/components/molecules/RaisedPageCard/RaisedPageCard"
import HomeProfile from "src/components/organisms/HomeProfile/HomeProfile"
import HomeProjects from 'src/components/organisms/HomeProjects/HomeProjects'

const HomeTemplate = () => (
	<>
		<Parallax small filter image="/profile-bg.jpg" />
		<RaisedPageCard topOverlap>
			<HomeProfile />
		</RaisedPageCard>
		<RaisedPageCard>
			<HomeProjects />
		</RaisedPageCard>
	</>
)

export default HomeTemplate
