import React from 'react'
import { Link as LinkScroll } from "react-scroll";

import { HomeMain, HomeForWho, HomeSkills, HomeWorks, HomeNeed, HomeMaster, HomeLessons, HomeCertificate, HomeBuy, HomeFaq } from '../components/'

const Home: React.FC = () => {
	return (
		<>
			<LinkScroll
				to="home-buy"
				spy={true}
				smooth={true}
				offset={window.innerWidth > 600 ? -100 : 300}
				duration={700}
			>
				<button className={`home__btn`}>
					<p>Start learning</p>
				</button>
			</LinkScroll>

			<HomeMain />

			<HomeForWho />

			<HomeSkills />

			<HomeWorks />

			<HomeNeed />

			<HomeMaster />

			<HomeLessons />

			<HomeCertificate />

			<HomeBuy />

			<HomeFaq />
		</>
	)
}

export default Home