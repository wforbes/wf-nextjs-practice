import React from 'react'
import RaisedPageCard from 'src/components/molecules/RaisedPageCard/RaisedPageCard'
import HomeProfile from "src/components/organisms/HomeProfile/HomeProfile"
import HomeProjects from 'src/components/organisms/HomeProjects/HomeProjects'

const HomeTemplate = () => (
	<>
		<HomeProfile />
		<RaisedPageCard>
			<HomeProjects />
		</RaisedPageCard>
	</>
)

export default HomeTemplate
