import React from 'react'
import { Link as LinkScroll } from "react-scroll";

import { HomeMain, HomeForWho, HomeSkills, HomeLessons, HomeTools, HomeSalary, HomeCertificate, HomeWorks, HomeBuy, HomeAfterPayment, HomeFaq } from '../components/'

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
				<button className={`btn home__btn`}>
					Start learning

					<svg viewBox="0 0 144 115" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M82.5517 102.338L120.207 64.7653C108.828 65.5957 93.3103 65.8033 8.06897 65.8033C3.72414 65.8033 0 62.0668 0 57.7076C0 53.3484 3.51724 49.6119 8.06897 49.6119C85.8621 49.6119 107.793 49.6119 120.414 50.4422L82.5517 12.87C80.8965 11.2094 80.069 9.34116 80.069 7.47293C80.069 3.52888 83.7931 0 87.7241 0C89.5862 0 91.2414 0.622748 92.8965 2.2834L139.862 49.1968C142.552 51.8953 144 54.8014 144 57.5C144 60.4061 142.552 63.3123 139.862 66.0108L93.1034 112.717C91.6552 114.17 89.7931 115 87.931 115C84 115 80.2759 111.471 80.2759 107.527C80.2759 105.866 80.8965 103.998 82.5517 102.338Z" />
					</svg>
				</button>
			</LinkScroll>

			<HomeMain />

			<HomeForWho />

			<HomeSkills />

			<HomeLessons />

			<HomeTools />

			<HomeSalary />

			<HomeCertificate />

			<HomeWorks />

			<HomeBuy />

			<HomeAfterPayment />

			<HomeFaq />
		</>
	)
}

export default Home